<template>
  <main class="space-y-6">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8">
      <!-- <div class=" lg:col-span-2  border-blue-500">
        <div class="cryptohopper-web-widget" data-id="4"
          data-coins="bitcoin,ethereum,bnb,usd-coin,litecoin,trust-wallet-token" data-numcoins="50" />
      </div> -->
      <div class="rounded-lg bg-blue-50 border">
        <div class="flex justify-between items-center px-3">
          <div class="py-2">
            <h1 class="text-gray-700 text-sm font-bold">
              Account Balance
            </h1>
            <p class="text-gray-400 text-xl">
              <span class="text-xl text-gray-900">{{ formatNumberAsDollar(wallet?.wallet_balance) ?? '0.00' }}</span>
            </p>
          </div>
          <div>
            <nuxt-link to="/dashboard/deposit" class="bg-black text-white rounded-md px-3 py-2.5">
              Deposit Funds
            </nuxt-link>
          </div>
        </div>
        <div class="space-y-6">
          <div class="md:flex items-center gap-x-6 p-3 space-y-6 md:space-y-0">
            <div
              class="h-[300px] md:w-1/2 rounded-lg flex justify-between flex-col bg-[url('~/assets/img/trading-stat.jpg')] bg-cover bg-top bg-no-repeat">
              <div class="p-3">
                <div class="rounded-full bg-red-400 p-2 h-10 w-10 flex justify-center items-center">
                  <img src="@/assets/img/money-wallet.png" class="h-7 w-7" alt="">
                </div>
              </div>
              <div class="border-t-[0.4px] border-white">
                <div class="px-3 py-2">
                  <p class="text-white text-xs">
                    Profits
                  </p>
                  <p class="text-lg font-semibold text-white">
                    {{ formatNumberAsDollar(wallet?.net_earnings) ?? '0.00' }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="h-[300px] md:w-1/2 rounded-lg flex justify-between flex-col bg-[url('~/assets/img/recession.jpg')] bg-cover bg-top bg-no-repeat">
              <div class="p-3">
                <div class="rounded-full bg-red-400 p-2 h-10 w-10 flex justify-center items-center">
                  <img src="@/assets/img/analytics.png" class="h-7 w-7" alt="">
                </div>
              </div>
              <div class="border-t-[0.4px] border-white">
                <div class="px-3 py-2">
                  <p class="text-white text-xs">
                    Trading
                  </p>
                  <p class="text-lg font-semibold text-white">
                    {{ formatNumberAsDollar(wallet?.profits) ?? '0.00' }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class=" bg-white py-10 space-y-4 border border-gray-600 h-[400px] overflow-y-auto">
            <h1 class="text-gray-600 font-bold border-b pb-4 pl-6">
              Recent Transactions
            </h1>
            <div v-if="!loadingTransactions && transactionsList" class="text-gray-100 w-full p-3 rounded-lg">
              <div class="overflow-x-auto w-full">
                <table class="w-full text-xs">
                  <colgroup>
                    <col>
                    <col>
                    <col>
                    <col class="w-24">
                  </colgroup>
                  <thead class="bg-gray-700 sticky top-0">
                    <tr class="text-left">
                      <th class="p-3">
                        Transaction Type
                      </th>
                      <th class="p-3">
                        Date
                      </th>
                      <th class="p-3 text-right">
                        Amount
                      </th>
                      <th class="p-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in transactionsList" :key="index"
                      class="border-b border-opacity-20 border-gray-700 bg-gray-900">
                      <td class="p-3">
                        <p> {{ item?.transaction_type }}</p>
                      </td>
                      <td class="p-3">
                        <p>{{ formatDateTime(item?.created_at) ?? 'N/A' }}</p>
                      </td>
                      <td class="p-3">
                        <p class="text-gray-400">
                          {{ formatNumberAsDollar(item?.amount) }}
                        </p>
                      </td>
                      <td class="p-3 text-right">
                        <span class="px-3 py-1 font-semibold rounded-md text-white"
                          :class="[item?.transactionStatus === 'Approved' ? 'bg-green-500' : item?.transactionStatus === 'Pending' ? 'bg-yellow-500' : item?.transactionStatus === 'Declined' ? 'bg-red-500' : 'bg-violet-400']">
                          <span> {{ item?.status }}</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <loader v-else-if="loadingTransactions" />
            <p v-if="!transactionsList.length && !loadingTransactions" class="text-center font-medium py-20">
              No Transactions Available
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { baseUrl } from '~/assets/api/baseUrl';
export default {
  components: {

  },
  layout: 'user-dashboard',
  data() {
    return {
      loading: false,
      userData: {},
      wallet: {},
      loadingTransactions: false,
      transactionsList: [],
      assetsList: [
        {
          name: 'BTC',
          price: '$214.08',
          rate: '+0.23%',
          balance: '122,356',
          proportion: 75,
          icon: 'binance'
        },
        {
          name: 'ETH',
          price: '$214.08',
          rate: '+0.23%',
          balance: '122,356',
          proportion: 14,
          icon: 'eth'
        }
      ]
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      this.loading = true
      const accessToken = JSON.parse(window.localStorage.getItem('auth'))
      this.loading = true

      try {
        const response = await fetch(`${baseUrl}wallets`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + accessToken
          },

        })
        .then(res => res.json())


        if (response?.error) {
          this.$toastr.e(response.error)
        }
        else if(response?.message){
          this.$toastr.e(response.message)

        }
        else {
          console.log(response)
          this.wallet = response
          this.transactionsList = response.transactions

        }
      } finally {
        this.loading = false
      }
    },

    formatNumberAsDollar(number) {
      const parsedNumber = typeof number === 'number' ? number : parseFloat(number);
      return parsedNumber?.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    },
    formatDateTime(date) {
      // Check if date is a string and convert it to a Date object
      if (typeof date === 'string') {
        date = new Date(date)
      }

      // Check if date is a valid Date object
      if (Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }
        return date.toLocaleDateString('en-US', options)
      } else {
        return 'Invalid Date'
      }
    }
  }
}
</script>
