<template>
  <main class="flex">
    <user-side-bar class="bg-blue-50 sticky top-0 hidden lg:block" />
    <div class="border border-red-500 w-full flex-1">
      <div class="sticky top-0 z-50">
        <user-header />
      </div>
      <div class="md:p-3 md:border-[0.4px] md:shadow-md bg-white md:rounded-lg m-3 z-0">
        <Nuxt />
      </div>
    </div>
    <!-- <tawk-messenger /> -->
  </main>
</template>

<script>
import UserHeaderSection from '@/components/user-dashboard/UserHeader.vue'
import UserSideBar from '@/components/user-dashboard/UserSideBar.vue'
export default {
  components: {
    UserHeaderSection, UserSideBar
  },
  mounted () {
    const user = window.localStorage.getItem('user')
    if (user === null) {
      this.$router.push('/login')
    }
  }
}
</script>
