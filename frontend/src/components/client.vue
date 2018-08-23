<template>
  <div class="client">
    <div class="client__buttons">
      <a
        @click="closeClient()"
        class="client__close">
        <i class="client__close__icon icon icon--habbo"/>
        <div class="client__close__expand">
          <div class="client__close__text">
            Web
          </div>
        </div>
      </a>
    </div>
    <div id="play-area"/>
  </div>
</template>

<script>
import SWF from 'swfobject'
import API from '@/app/api'
import Session from '@/app/storage/session'
import Settings from '@/app/storage/settings'
import Container from '@/components/utility/container'
export default {
  components: {
    'Container': Container
  },
  data () {
    return {
      state: {
        error: false,
        loading: true,
        step: 'Initializing Client',
        site: Settings.getters.site,
        flash: true
      },
      session: {
        auth: null,
        user: Session.getters.user,
        flash: false
      },
      client: {
        variables: {},
        paramaters: {}
      }
    }
  },
  async mounted () {
    try {
      this.state.step = 'Checking For Flashplayer'
      await this.hasFlash()
      this.state.step = 'Authenticating game session'
      await this.getSSO()
      this.state.step = 'Preparing game environment'
      await this.configureSWF()
      this.state.step = 'Fetching client assets'
      await this.loadSWF()
    } catch (e) {
      if (e) this.$router.push({ name: 'Errors.500' })
    }
  },
  methods: {
    async hasFlash () {
      if (SWF.hasFlashPlayerVersion('10')) {
        return Promise.resolve()
      } else {
        this.state.flash = false
        return Promise.reject(Error(false))
      }
    },
    async getSSO () {
      try {
        let sso = await API.get('session/client')
        this.session.auth = sso.data
        return Promise.resolve()
      } catch (e) {
        return Promise.reject(Error(true))
      }
    },
    async configureSWF () {
      const site = this.state.site
      // Variables
      this.client.variables = {
        'connection.info.host': site['server.ip'],
        'connection.info.port': site['server.port'],
        'url.prefix': site['site.link'],
        'site.url': site['site.link'],
        'external.variables.txt': `${site['swf.config']}/variables.txt`,
        'external.texts.txt': `${site['swf.config']}/texts.txt`,
        'productdata.load.url': `${site['swf.config']}/productdata.txt`,
        'furnidata.load.url': `${site['swf.config']}/furnidata.xml`,
        'external.figurepartlist.txt': `${site['swf.config']}/figuredata.xml`,
        'external.override.variables.txt': `${site['swf.config']}/override/variables.txt`,
        'flash.client.url': `${site['swf.base']}/`,
        'client.starting.revolving': 'Heroic Beta 3.0.1',
        'use.sso.ticket': '1',
        'sso.ticket': this.session.auth,
        'flash.client.origin': 'popup',
        'client.allow.cross.domain': '1',
        'client.notify.cross.domain': '0'
      }
      // Paramaters
      this.client.paramaters = {
        'base': `${site['swf.base']}/`,
        'allowScriptAccess': 'always',
        'menu': 'false'
      }
      return Promise.resolve()
    },
    async loadSWF () {
      SWF.embedSWF(`${this.state.site['swf.config']}/habbo.swf`, 'play-area', '100%', '100%', '10.0.0', '', this.client.variables, this.client.paramaters, null)
      return Promise.resolve()
    },
    async closeClient () {
      await Session.dispatch('client', false)
    }
  }
}
</script>