<template>
  <div class="user-menu">
    <div class="user-menu__header">
      <a class="user-menu__toggle" v-on-clickaway="hide" @click="toggle">
        <div class="user-menu__name__wrapper">
          <div :class="{ 'user-menu__name--open': status}" class="user-menu__name">
            {{ user.username }}
          </div>
        </div>
        <div class="habbo-imager user-menu__avatar">
          <imager :look="user.look" :headonly="1"/>
        </div>
      </a>
    </div>
    <ul
      v-show="status"
      class="user-menu__list">
      <li class="user-menu__item">
        <router-link :to="{ name: 'Home.Profile', params: { username: user.username }}" class="user-menu__link user-menu__link--profile">My profile</router-link>
      </li>
      <li class="user-menu__item">
        <router-link :to="{ name: 'Home.Settings' }" class="user-menu__link user-menu__link--settings">Settings</router-link>
      </li>
      <li class="user-menu__item">
        <router-link :to="{ name : 'Home.Logout' }" class="user-menu__link user-menu__link--logout">Logout</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Session from '@/app/storage/session'
import { mixin as clickaway } from 'vue-clickaway'
export default {
  data () {
    return {
      user: Session.state.user,
      status: false
    }
  },
  methods: {
    toggle () {
      this.status = !this.status
    },
    hide () {
      if (this.status) this.status = false
    }
  },
  mixins: [ clickaway ]
}
</script>
