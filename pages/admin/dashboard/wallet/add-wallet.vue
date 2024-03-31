<template>
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside
        class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
      >
        <img
          alt="Pattern"
          src="@/assets/img/create-wallet.jpg"
          class="absolute inset-0 h-full w-full object-cover"
        >
      </aside>

      <main
        class="flex items-center w-full justify-center px-8 w-full py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl w-full">
          <h1
            class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
          >
            Create Wallet
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500">
            please fill the following fields with your information.
          </p>

          <form class="mt-8 gap-6 w-full space-y-4" @submit.prevent="createWallet">
            <div class="col-span-6 sm:col-span-6">
              <label
                for="walletName"
                class="block text-sm font-medium text-gray-700"
              >
                Wallet Name
              </label>

              <input
                id="walletName"
                v-model="form.name"
                type="text"
                name="walletName"
                class="mt-1 w-full px-3 py-3 border outline-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              >
            </div>

            <div class="col-span-6 sm:col-span-6">
              <label
                for="walletAddress"
                class="block text-sm font-medium text-gray-700"
              >
                Wallet Address
              </label>

              <input
                id="walletAddress"
                v-model="form.address"
                type="text"
                name="walletAddress"
                class="mt-1 w-full px-3 py-3 border outline-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              >
            </div>

            <div class="w-full">
              <button
                type="submit"
                :disabled="!isFormEmpty || loading"
                class="w-full rounded-md border disabled:cursor-not-allowed disabled:opacity-25 border-black bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                {{ loading ? 'saving...' : 'Create walet' }}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'dashboards',
  data () {
    return {
      loading: false,
      form: {
        name: '',
        address: ''
      }
    }
  },
  computed: {
    isFormEmpty () {
      return !!(this.form.name && this.form.address)
    }
  },
  methods: {
    createWallet () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$toastr.s('Wallet was created sucessfully')
        this.$router.push('/admin/dashboard/wallet')
      }, 3000)
    }
  }
}
</script>

<style>

</style>
