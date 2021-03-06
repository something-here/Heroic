// Dependencies
import Home from '@/views/home'

// Create Routes List
let routes = []

/* Add To List */

// Me
routes.push({
  name: 'Home.Me',
  path: '/me',
  component: Home.Me
})

// Account Settings
routes.push({
  name: 'Home.Settings',
  path: '/settings',
  component: Home.Settings
})

// Profile (View)
routes.push({
  name: 'Home.Profile',
  path: '/profile/:username',
  component: Home.Profile,
  props: true
})

routes.push({
// Client
  name: 'Home.Client',
  path: '/client',
  component: Home.Client
})

// Logout
routes.push({
  name: 'Home.Logout',
  path: '/logout',
  component: Home.Logout
})

/* End of Add To List */
export default routes
