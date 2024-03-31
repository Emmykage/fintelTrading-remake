<template>
  <main class="relative">
    <header class="px-4 py-2 bg-[#003b6d] sticky top-0 z-50">
      <div class="container flex justify-between h-14 mx-auto">
        <nuxt-link rel="noopener noreferrer" to="/" aria-label="Back to homepage" class="flex items-center p-2">
          <img src="@/assets/img/Fidelitysvalues.png" class="h-10 w-10" alt="">
        </nuxt-link>
        <ul class="items-stretch hidden space-x-3 lg:flex">
          <li v-for="{title, url} in navigationItems" class="flex items-center gap-x-3">
            <nuxt-link  :key="title" :to="url" rel="noopener noreferrer" class="flex text-white text-sm items-center px-4 -mb-1">
              {{ title }}
            </nuxt-link>
          </li>
        </ul>
        <div class="items-center gap-x-6 flex-shrink-0 hidden lg:flex">
          <nuxt-link to="/login" class="self-center px-8 py-2 font-medium rounded-full text-white border border-white">
            Login
          </nuxt-link>
          <nuxt-link to="/signup" class="self-center px-8 py-2 font-medium rounded-full dark:bg-violet-400 dark:text-gray-900">
            Get Started
          </nuxt-link>
        </div>
        <button v-b-toggle.sidebar-1 class="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 dark:text-gray-100">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
    <b-sidebar
      id="sidebar-1"
      title="Fintel Values"
      backdrop-variant="dark"
      shadow
      no-header
    >
      <template #default="{ hide }">
        <div class="flex-1 space-y-6 p-6">
          <div class="flex justify-between items-center">
            <h4 id="sidebar-no-header-title">
              <img
                src="@/assets/img/Fidelitysvalues.png"
                alt="logo"
                class="h-10 w-10"
              >
            </h4>
            <button @click="hide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <ul class="pt-2 pb-4 space-y-1 text-sm">
            <li v-for="{title, url} in navigationItems" :key="title" class="rounded-sm">
              <NuxtLink rel="noopener noreferrer" :to="url" class="flex items-center p-2 space-x-3 rounded-md cursor-pointer" @click="toggleMobileNavbar">
                <span>{{ title }}</span>
              </NuxtLink>
            </li>
            <div class="w-full pt-6">
              <button class="self-center px-8 py-2.5 font-medium bg-green-700 rounded-md w-full text-white border border-white" @click="$router.push('/login')">
                Login
              </button>
            </div>
          </ul>
        </div>
      </template>
    </b-sidebar>
  </main>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      showMobileNav: false,
      navigationItems: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'About',
          url: '/about'
        },
        {
          title: 'Investmant plans',
          url: '/plans'
        },
        {
          title: 'Contact',
          url: '/contact'
        },
        {
          title: 'Meet the Team',
          url: '/teams'
        }
      ]
    }
  },
  watch: {
    '$route' () {
      this.showMobileNav = false
    }
  },
  methods: {
    toggleMobileNavbar () {
      this.showMobileNav = !this.showMobileNav
      this.$emit('toggleNav', this.showMobileNavbar)
    }
  }
}
</script>

<style scoped>
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold !important;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e !important;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}
</style>
