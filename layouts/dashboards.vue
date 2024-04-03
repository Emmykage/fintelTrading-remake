<template>
  <main class="flex relative">
    <div class="hidden lg:flex h-screen flex-col sticky top-0 justify-between border-e bg-gray-900 w-72">
      <div class="px-4 py-6">
        <span
          class="grid h-10 w-32 place-content-center rounded-lg"
        >
          <button rel="noopener noreferrer" to="/dashboard" aria-label="Back to homepage" class="flex items-center p-2">
            <img src="@/assets/img/Fidelitysvalues.png" alt="logo" class="h-10 w-10">
          </button>
        </span>

        <ul class="mt-6 space-y-1">
          <li class="space-y-3 flex flex-col">
            <nuxt-link
              v-for="itm in sidebarItems"
              :key="itm.name"
              :to="itm.url"
              class="rounded-md px-4 py-2.5 space-y-2 text-sm font-light text-gray-700 flex items-center space-x-3"
            >
              <img :src="require(`~/assets/icons/${itm.icon}.svg`)" alt="icons">
              <p class="text-gray-100">
                {{ itm.name }}
              </p>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="sticky inset-x-0 bottom-0 border-t pt-3 border-gray-100">
        <div class="flex justify-center items-center pb-3">
          <button
            class="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-red-500 px-5 py-2 transition-colors hover:bg-transparent focus:outline-none focus:ring"
            href="/download"
            @click="handleLogout"
          >
            <span
              class="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500"
            >
              Logout
            </span>

            <span
              class="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f25155"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><path d="M16 17l5-5-5-5M19.8 12H9M10 3H4v18h6" /></svg>
            </span>
          </button>
        </div>
      </div>
    </div>
    <div v-if="showMobile" class="z-50 absolute top-0 w-full">
      <div class="flex flex-col h-screen p-6 w-full dark:bg-gray-900 dark:text-gray-100">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <img src="@/assets/img/Fidelitysvalues.png" alt="logo" class="h-10 w-10">
            <button class="p-2" @click="toggleNavbar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center py-4">
              <button type="submit" class="p-2 focus:outline-none focus:ring">
                <svg fill="currentColor" viewBox="0 0 512 512" class="w-5 h-5 dark:text-gray-400">
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z" />
                </svg>
              </button>
            </span>
            <input type="search" name="Search" placeholder="Search..." class="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900">
          </div>
          <div class="flex-1">
            <ul class="pt-2 pb-4 space-y-1 text-sm">
              <nuxt-link
                v-for="item in sidebarItems"
                :key="item.name"
                :to="item.url"
                class="rounded-md px-4 py-2.5 space-y-2 text-sm font-light text-gray-700 flex items-center space-x-3"
              >
                <img :src="require(`~/assets/icons/${item.icon}.svg`)" alt="icons">
                <p class="text-gray-100">
                  {{ item.name }}
                </p>
              </nuxt-link>
            </ul>
          </div>
        </div>
        <div class="flex items-center p-2 space-x-4 justify-self-end pl-10">
          <button
            class="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-red-500 px-5 py-2 transition-colors hover:bg-transparent focus:outline-none focus:ring"
            href="/download"
            @click="handleLogout"
          >
            <span
              class="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500"
            >
              Logout
            </span>

            <span
              class="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f25155"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><path d="M16 17l5-5-5-5M19.8 12H9M10 3H4v18h6" /></svg>
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="flex justify-end items-end bg-white w-full">
        <div class="flex items-center justify-between lg:hidden pr-6 pt-2">
          <div class="-ml-[350px] cursor-pointer" @click="$router.push('/')">
            <img src="@/assets/img/logo.jpeg" class="rounded-full h-10 w-10 ml-6 border p-1" alt="">
          </div>
          <div>
            <button class="p-2" @click="toggleNavbar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ><path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3" /></svg>
            </button>
          </div>
        </div>
        <div class="hidden lg:flex items-center gap-x-3 py-3 pr-6">
          <p class="text-sm lg:text-base">
            Hi, {{ loggedUser?.firstName }}  {{ loggedUser?.lastName }}
          </p>
          <div class="relative flex-shrink-0">
            <span class="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900" />
            <img src="https://source.unsplash.com/50x50/?portrait" alt="" class="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700">
          </div>
        </div>
      </div>
      <div class="p-6 h-screen bg-gray-50 overflow-y-auto">
        <Nuxt />
      </div>
    </div>
  </main>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
export default {
  data () {
    return {
      showMobileNav: false,
      showMobile: false,
      isMobile: false,
      user: null,
      loggedUser: null,
      window: {
        width: 0,
        height: 0
      },
      sidebarItems: [
        {
          name: 'Dashboard',
          icon: 'dashboard',
          url: '/admin/dashboard'
        },
        {
          name: 'Users',
          icon: 'users',
          url: '/admin/dashboard/users'
        },
        // {
        //   name: 'Funds',
        //   icon: 'funds',
        //   url: '/admin/dashboard/funds-history'
        // },
        {
          name: 'Withdrawals',
          icon: 'accounts',
          url: '/admin/dashboard/withdrawals'
        },
        {
          name: 'Deposits',
          icon: 'accounts',
          url: '/admin/dashboard/deposits'
        },
        {
          name: 'Wallet',
          icon: 'lending',
          url: '/admin/dashboard/wallet'
        }
      ]
    }
  },
  watch: {
    '$route' () {
      if (this.isMobile) {
        this.showMobile = !this.showMobile
      }
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
    const user = JSON.parse(window.localStorage.getItem('user'))
    if (user === null) {
      this.$router.push('/admin')
    } else {
      this.loggedUser = user
    }
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 900
    },
    toggleMobileNavbar () {
      this.showMobileNav = !this.showMobileNav
      this.$emit('toggleNav', this.showMobileNavbar)
    },
    toggleNavbar () {
      this.showMobile = !this.showMobile
    },
    handleLogout () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!'
      }).then((result) => {
        if (result.value) {
          window.localStorage.removeItem('user')
          window.localStorage.removeItem('auth')
          this.$router.push('/admin')
        } else {
          this.$swal('Cancelled', "You're still logged in!", 'info')
        }
      })
    }
  }
}
</script>

<style scoped>
.nuxt-link-active {
  font-weight: bold;
}
.nuxt-link-exact-active {
  background-color: black;
  color: white;
}

</style>
