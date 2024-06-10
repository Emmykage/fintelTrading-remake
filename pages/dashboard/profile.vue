<template>
  <main class="lg:flex justify-start items-start gap-x-10 space-y-10 lg:space-y-0">
    <section class="bg-white lg:w-5/12 rounded-md border">
      <p class="border-b pl-6 py-4 text-sm font-semibold">
        Keep Your Profile Up-To-Date
      </p>
      <form class="p-10 space-y-6" @submit.prevent="updateUser">
        <div class="space-y-1">
          <label class="text-xs text-gray-700 font-medium">First Name</label>
          <input v-model="updatedUserData.first_name" type="text" disabled
            class="py-2 border rounded-md w-full outline-none pl-6">
          <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
        </div>

        <div class="space-y-1">
          <label class="text-xs text-gray-700 font-medium">Last Name</label>
          <input v-model="updatedUserData.last_name" type="text" class="py-2 border rounded-md w-full outline-none pl-6" readonly>
          <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
        </div>

        <div class="space-y-1">
          <label class="text-xs text-gray-700 font-medium">Email address:</label>
          <input v-model="updatedUserData.email" type="email" class="py-2 border rounded-md w-full outline-none pl-6" disabled>
          <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
        </div>
        <div class="space-y-1">
          <label class="text-xs text-gray-700 font-medium">Referral code:</label>
          <input v-model="updatedUserData.referral_code" type="text" class="py-2 border rounded-md w-full outline-none pl-6" disabled>
        </div>
        <div class="space-y-1">
          <label class="text-xs text-gray-700 font-medium">Password:</label>
          <input v-model="updatedUserData.password" type="password" disabled
            class="py-2 border rounded-md w-full outline-none pl-6">
          <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
        </div>

        <!-- <div class="space-y-1">
          <label class="text-xs text-gray-700 font-medium">Wallet Address:</label>
          <input v-model="updatedUserData.walletAddress" type="text" class="py-2 border rounded-md w-full outline-none pl-6">
        </div> -->
        <div class="w-full">
          <button :disabled="!isFormEmpty" :class="[!isFormEmpty ? 'opacity-25 cursor-not-allowed' : null]"
            class="bg-green-500 w-full disabled:cursor-not-allowed disabled:opacity-25 text-white rounded-lg px-6 py-3 text-sm">
            {{ processing ? 'processing...' : 'Update' }}
          </button>
        </div>
      </form>
    </section>

  </main>
</template>

<script>
  import {baseUrl} from "~/assets/api/baseUrl"

export default {

  layout: 'user-dashboard',
  data() {
    return {
      userId: '12345',
      processing: false,
      updatedUserData: {
        first_name: '',
        last_name: '',
        email: '',
        password_digest: ''
      }
    }
  },
  computed: {
    isFormEmpty() {
      return !!(this.updatedUserData.first_name && this.updatedUserData.last_name && this.updatedUserData.email && this.updatedUserData.password_digest)
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    async updateUser() {
      this.processing = true
      const accessToken = JSON.parse(window.localStorage.getItem('auth'))
      try {

        const response = await fetch(`${baseUrl}/users/${this.updatedUserData.id}`,
          {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
              authorization: 'Bearer ' + accessToken
            },
            body: JSON.stringify({user: {
              first_name: this.updatedUserData.first_name,
              last_name: this.updatedUserData.last_name,
              email: this.updatedUserData.email,
              password: this.updatedUserData.password_digest
            }})
          }
        ).then(res => res.json())

        if (response?.error) {
          this.$toastr.e(response.error)
        } else {
          this.$toastr.s('You have successfully updated your profile')
        }
      } finally {
        this.processing = false
      }
    },
    async getUserInfo() {
      this.loading = true
      const accessToken = JSON.parse(window.localStorage.getItem('auth'))
      this.loading = true


      try {
        const response = await fetch(`${baseUrl}users/account`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + accessToken
          },

        }).then(res => res.json())
        if (response?.error) {
          this.$toastr.e(response.error)
        } else {
          this.updatedUserData = response
          console.log(response)
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style></style>
