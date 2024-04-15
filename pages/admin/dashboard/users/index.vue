<template>
  <main>
    <Transition name="fade">
      <section class="text-white">
        <div class="flex items-center justify-between my-3">
          <button class="outline-none border bg-gray-200 text-black px-3 py-1 rounded-md text-sm" @click="goBack()">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none"
              stroke="#747070" stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel">
              <path d="M19 12H6M12 5l-7 7 7 7" />
            </svg>
          </button>
        </div>
        <div class="sm:flex-1 pb-0 mt-3">
          <label for="search" class="sr-only">Search</label>

          <input v-model="search" type="text" placeholder="Search.."
            class="w-full rounded-tr-md rounded-tl-md outline-none bg-white p-3 text-gray-700 transition border focus:border-white focus:outline-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent">
        </div>
        <!-- <div></div> -->
        <b-card class="mt-3 bg-green-30">
          <b-table
          striped
          show-empty
          responsive
          :items="usersList"
          :fields="fields"
          :busy="loading"
            :current-page="currentPage"
            :per-page="perPage"
            class="width-full">
            <template #table-busy>
              <div class="text-center my-2 cursor-pointer">
                <b-spinner class="align-middle" />
                <small>Loading...</small>
              </div>
            </template>

            <template #empty>
              <p class="text-center text-sm text-secondary py-4 cursor-pointer">
                {{
            search
              ? `No User found for search value: "${search}"`
              : "No Users available"
          }}
              </p>
            </template>

            <template #cell(sn)="data">
              <div class="font-medium py-4 text-sm cursor-pointer">
                {{ data.index + 1 }}
              </div>
            </template>

            <template #cell(user)="data">
              <div class="font-medium text-sm cursor-pointer flex items-center gap-x-2 py-4">
                <div class="bg-gray-500 text-white rounded-full h-10 w-10 flex text-center justify-center items-center">
                  {{ getInitials(data?.item?.first_name, data?.item?.last_name) }}
                </div>
                <div>
                  <span>
                    {{
            data?.item?.first_name
          }}
                  </span>
                  <span>
                    {{
              data?.item?.last_name
            }}
                  </span><br>
                  <span>
                    {{
              data?.item?.email
            }}
                  </span>
                </div>
              </div>
            </template>
            <template #cell(planType)="data">
              <div class="font-medium py-4 text-sm">
                {{ data?.item?.plan?.name ?? 'N/A' }}
              </div>
            </template>

            <template #cell(accountBalance)="data">
              <div class="font-medium py-4 text-sm cursor-pointer">
                {{
            formatNumberAsDollar(data?.item?.wallet?.wallet_balance) ?? 'N/A' }}
              </div>
            </template>

            <template #cell(tradingBalance)="data">
              <div class="font-medium py-4 text-sm">
                {{ formatNumberAsDollar(data?.item?.wallet?.net_earnings) ?? 'N/A' }}
              </div>
            </template>

            <template #cell(profit)="data">
              <div class="font-medium py-4 text-sm">
                {{
            formatNumberAsDollar(data?.item?.wallet?.profits) ?? 'N/A'
          }}
              </div>
            </template>

            <template #cell(eth)="data">
              <div class="font-medium py-4 text-sm">
                <span v-if="data.item.eth" class="font-medium py-4 text-sm">
                  {{ data.item.eth }}
                </span>
                <span v-else>N/A</span>
              </div>
            </template>
            <template #cell(btc)="data">
              <div class="font-medium py-4 text-sm">
                <span v-if="data.item.btc" class="font-medium py-4 text-sm">
                  {{ data.item.btc }}
                </span>
                <span v-else>N/A</span>
              </div>
            </template>

            <template #cell(status)="data">
              <div class="font-medium text-sm cursor-pointer px-3 py-4">
                <span
                  :class="[data?.item?.Status === 'Active' ? 'bg-green-500 text-white rounded-md text-sm' : 'bg-red-500 text-white rounded-md text-sm']"
                  class="px-3 py-2">
                  {{
            data?.item?.top_portfolo?.status ?? "--" }}
                </span>
              </div>
            </template>
            <template #cell(action)="data">
              <div class="font-medium text-sm cursor-pointer px-3 py-4">
                <img src="@/assets/icons/actions.svg" alt="more" class="cursor-pointer h-10 w-10"
                  @click="handleClick(data.item)">
              </div>
            </template>
          </b-table>

          <div class="flex justify-end items-end">
            <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" size="md" class="my-3" />
          </div>
        </b-card>
      </section>
    </Transition>
    <b-modal id="updateUserInfo" hide-footer centered hide-header>
      <div class="flex justify-center items-center">
        <h1 class="text-lg font-semibold text-black">
          Update Information
        </h1>
      </div>
      <form class="mt-8 gap-6 w-full space-y-6 px-6 pb-6" @submit.prevent="updateUserInfo">
        <div class="col-span-6 sm:col-span-6">
          <label for="profit" class="block text-sm font-medium text-gray-700">
            Profit
          </label>

          <input id="profit" v-model="selectedUser.profit" type="number" step="0.01" min="0" name="profit"
            class="mt-1 w-full px-3 py-3 border outline-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
        </div>

        <div class="col-span-6 sm:col-span-6">
          <label for="tradingBalance" step="0.01" min="0" class="block text-sm font-medium text-gray-700">
            Trading Balance
          </label>

          <input id="tradingBalance" v-model="selectedUser.tradingBalance" type="number" name="tradingBalance"
            class="mt-1 w-full px-3 py-3 border outline-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
        </div>

        <div class="col-span-6 sm:col-span-6">
          <label for="accountBalance" class="block text-sm font-medium text-gray-700">
            Account Balance
          </label>

          <input id="accountBalance" v-model="selectedUser.accountBalance" type="number" step="0.01" min="0"
            name="accountBalance"
            class="mt-1 w-full px-3 py-3 border outline-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
        </div>

        <div class="w-full flex justify-between items-center gap-x-4">
          <button type="button"
            class="w-full rounded-md border disabled:cursor-not-allowed disabled:opacity-25 bg-gray-500 px-12 py-3 text-xs font-medium text-white transition focus:outline-none focus:ring "
            @click="$bvModal.hide('updateUserInfo')">
            Cancel
          </button>
          <button type="submit" :disabled="processing"
            class="w-full rounded-md border text-xs disabled:cursor-not-allowed disabled:opacity-25 border-black bg-black px-12 py-3 font-medium text-white transition hover:bg-transparent focus:outline-none focus:ring">
            Continue
          </button>
        </div>
      </form>
    </b-modal>
  </main>
</template>

<script>
import {baseUrl} from "~/assets/api/baseUrl"
export default {
  name: 'UsersList',
  layout: 'dashboards',
  scrollToTop: true,
  data() {
    return {
      selectedUser: {},
      usersList: [],
      filteredUsers_:[],
      processing: false,
      fields: [
        {
          key: 'sn',
          label: 'S/N',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'user',
          label: 'User',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'planType',
          label: 'Plan Type',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'accountBalance',
          label: 'Account Balance',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'tradingBalance',
          label: 'Trading Balance',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'profit',
          label: 'Profit',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'eth',
          label: 'Etherium',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'btc',
          label: 'Bitcoin',
          class: 'font-medium text-end text-gray-400'
        },
        {
          key: 'status',
          label: 'Status',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'action',
          label: 'Action',
          class: ''
        }
      ],
      currentPage: 1,
      perPage: 6,
      search: '',
      showModal: false,
      totalRows: 1,
      loading: false
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        }
      ]
    }
  },
  computed: {
    filteredUsers() {
      // const search = this.search.toLowerCase()
      // console.log(this.search)
      // return this.usersList.filter((itm) => {
      //   return (
      //     itm?.first_name.toLowerCase?.().includes(search) ||
      //     itm?.last_name.toLowerCase?.().includes(search) ||
      //     itm?.email.toLowerCase?.().includes(search)
      //   )
      // })
    }
  },
  created() {
    this.fetchUsers()
  },
  mounted() {
    // this.fetchUsers()

    this.totalRows = this.usersList.length
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    async fetchUsers() {
      this.loading = true
      const accessToken = JSON.parse(window.localStorage.getItem('auth'))
      this.loading = true


      try {
        const response = await fetch(`${baseUrl}users`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + accessToken
          },

        }).then(res => res.json())
        if (response?.error) {
          this.$toastr.e(response.errors)
        } else {
          this.usersList = response
          this.totalRows = response.length
        }
      } finally {
        this.loading = false
      }
    },
    getInitials(first_name, last_name) {
      const firstInitial = first_name ? first_name.charAt(0) : ''
      const lastInitial = last_name ? last_name.charAt(0) : ''
      return `${firstInitial}${lastInitial}`
    },
    handleClick(data) {
      this.selectedUser = data
      this.$bvModal.show('updateUserInfo')
    },
    async updateUserInfo() {
      this.processing = true
      const accessToken = JSON.parse(window.localStorage.getItem('auth'))
      const user = JSON.parse(window.localStorage.getItem('user'))
      // console.log(this.selectedUser.top_portfolio)

      try {

        const response = await fetch(`${baseUrl}portfolios/${this.selectedUser.top_portfolio.id}/portfolio_interests`,
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: 'Bearer ' + accessToken
            },
            body: JSON.stringify({portfolio_interest: {interest: this.selectedUser.profit}})
          }
        )
        const data = await response.json()
        if (data?.errors) {
          this.$toastr.e(data.errors[0].message)
        } else {
          this.$toastr.s('User Information was updated successfully')
          this.$bvModal.hide('updateUserInfo')
        }
      } finally {
        this.processing = false
      }
    },
    formatNumberAsDollar(number) {
      return number?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.fade-leave-to {
  transform: scale(0.8);
}
table{
  width: 100%;
  background-color: red;
}
</style>
