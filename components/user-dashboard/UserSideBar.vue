<template>
  <div
    class="flex w-2/12 h-screen flex-col justify-between bg-blue-50"
  >
    <div class="px-4 py-6 relative">
      <span
        class="grid h-10 w-32 place-content-center rounded-lg text-xs text-gray-600"
      >
        <img
          src="@/assets/img/Fidelitysvalues.png"
          alt="logo"
          class="h-10 w-10"
        >
      </span>

      <ul class="mt-6 space-y-1 relative">
        <li class="space-y-6">
          <nuxt-link
            v-for="{ name, url, icon } in sidebarItems"
            :key="name"
            :to="url"
            class="rounded-md space-y-2 pl-3 py-2.5 text-sm font-light text-gray-700 flex items-center space-x-3"
          >
            <div class="bg-white shadow-sm h-8 w-8 p-2 rounded-full">
              <img
                :src="require(`~/assets/img/${icon}.png`)"
                alt="icons"
                class=""
              >
            </div>
            <p class="text-gray-600 pb-2">
              {{ name }}
            </p>
          </nuxt-link>
        </li>
      </ul>
      <!-- <div class="flex justify-center items-center p-10">
        <div class="absolute bottom-0 w-full p-6">
          <button class="w-full flex justify-center items-center gap-x-3 py-2.5 mt-16 rounded-md bg-red-500 text-white" @click="handleLogout">
            Logout
          </button>
        </div>
      </div> -->
    </div>

    <div class="absolute bottom-0 inset-x-0  px-4 py-4 hover:bg-gray-50 space-y-10">
      <div>
        <button class="w-full flex justify-center items-center gap-x-3 py-2.5 mt-16 rounded-md bg-red-500 text-white" @click="handleLogout">
          Logout
        </button>
      </div>
      <div class="border-gray-100  bg-white rounded-md p-2">
        <div href="#" class="flex items-center gap-2 w-full">
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-10 w-10 rounded-full object-cover"
          >

          <div>
            <p class="text-xs">
              <strong class="block font-medium">{{ loggedUser?.firstName ?? "" }}
                {{ loggedUser?.lastName ?? "" }}</strong>

              <span> {{ loggedUser?.email ?? "" }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      loggedUser: {},
      sidebarItems: [
        {
          name: 'Dashboard',
          icon: 'analytics',
          url: '/dashboard'
        },
        {
          name: 'Profile',
          icon: 'profile',
          url: '/dashboard/profile'
        },
        {
          name: 'Deposit',
          icon: 'deposit',
          url: '/dashboard/deposit'
        },
        {
          name: 'Withdrawals',
          icon: 'withdraw',
          url: '/dashboard/withdrawals'
        },
        {
          name: 'Buy plans',
          icon: 'investment',
          url: '/dashboard/purchase-plans'
        },
        {
          name: 'Transaction history',
          icon: 'history',
          url: '/dashboard/transaction-history'
        }
        // {
        //   name: 'Investment',
        //   icon: 'dashboard',
        //   url: '/dashboard/investment'
        // }
        // {
        //   name: 'Withdrawn',
        //   icon: 'withdraw.png',
        //   url: '/dashboard/withdraw'
        // }
      ]
    }
  },
  watch: {
    $route () {
      if (this.isMobile) {
        this.showMobile = !this.showMobile
      }
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
    const user = JSON.parse(window.localStorage.getItem('user'))
    // if (!user) {
    //   this.$router.push('/login')
    // } else {
    //   this.loggedUser = user
    // }
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
          this.$router.push('/login')
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
/* exact link will show the primary color for only the exact matching link */
.nuxt-link-exact-active {
  background-color: black;
  color: white;
}
</style>
