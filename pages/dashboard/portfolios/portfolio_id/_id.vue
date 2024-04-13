<template>
  <main>
    <Transition name="fade">
      <!-- <b-container> -->
      <section class="text-white">
        <div class="flex items-center justify-between my-3">
          <button class="outline-none border bg-gray-200 text-black px-3 py-1 rounded-md text-sm" @click="goBack()">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none"
              stroke="#747070" stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel">
              <path d="M19 12H6M12 5l-7 7 7 7" />
            </svg>
          </button>
          <p class="text-black">
            {{ $route.params.id }}

          </p>

          <a class="text-gray-50 bg-slate-800 py-2 px-4" @click="handleAction(id, 'inactive')">liquidate Asset</a>
          <!-- <h2>Parameter {{$route.params.id}}</h2> -->
        </div>

        <div class="sm:flex-1 pb-0 mt-3">
          <label for="search" class="sr-only">Search</label>

          <input v-model="search" type="text" placeholder="Search.."
            class="w-full rounded-tr-md rounded-tl-md outline-none bg-white p-3 text-gray-700 transition border focus:border-white focus:outline-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent">
        </div>
        <b-card class="mt-3">
          <b-table striped show-empty responsive :items="portfolio_interests" :fields="fields" :busy="loading"
            :current-page="currentPage" :per-page="perPage">
            <template #table-busy>
              <div class="text-center my-2 cursor-pointer">
                <b-spinner class="align-middle" />
                <small>Loading...</small>
              </div>
            </template>

            <template #empty>
              <p class="text-center text-sm text-secondary py-2 cursor-pointer">
                {{
            search
              ? `No Transactions found for search value: "${search}"`
              : "No Transactions available"
          }}
              </p>
            </template>

            <template #cell(sn)="data">
              <div class="py-4">
                <span class="font-medium py-2 text-sm cursor-pointer">
                  {{ data.index + 1 }}</span>
              </div>
            </template>

            <template #cell(amount)="data">
              <div class="py-4">
                <span class="font-medium py-2 text-sm cursor-pointer">
                  {{
            formatNumberAsDollar(data?.item?.interest)
          }}
                </span>
              </div>
            </template>

            <template #cell(timeAdded)="data">
              <div class="py-4">
                <span class="font-medium py-2 text-sm">{{ formatDateTime(data?.item?.created_at) }}</span>
              </div>
            </template>
          </b-table>

          <div class="flex justify-end items-end">
            <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" size="md" class="my-3" />
          </div>
        </b-card>
        <!-- </div> -->
      </section>
      <!-- </b-container> -->
    </Transition>
  </main>
</template>

<script>
import EnlargeableImage from '@diracleo/vue-enlargeable-image'
import {baseUrl} from "~/assets/api/baseUrl"
// const {portfolioId} = useRoute().params
import Swal from 'sweetalert2/dist/sweetalert2.js'


export default {
  name: 'Objective',
  components: {
    EnlargeableImage
  },
  layout: 'user-dashboard',
  scrollToTop: true,
  data() {
    return {
      id: "b5324daa-4d89-4ebf-97d1-c454603c4e87",
      portfolio_interests: [],
      portfolio_id: "",
      fields: [
        {
          key: 'sn',
          label: 'S/N',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'amount',
          label: 'Amount',
          class: 'font-medium text-gray-400 text-sm'
        },

        {
          key: 'timeAdded',
          label: 'Date',
          class: 'font-medium text-gray-400 text-sm'
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
  created() {
    // this.fetchTransactions()
  },
  mounted() {
    this.fetchPortfolio()
    // this.totalRows = this.portfoliosList.length
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    handleAction(id, type) {
      Swal.fire({
        title: `${type === 'inactive' ? 'Liquidate' : 'Reject'} Portfolio`,
        text: "Please Note: You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Proceed!'
      }).then((result) => {
        if (result.value) {
          this.handleLiquid(type)
        } else {
          this.$swal('Cancelled', 'Action was cancelled', 'info')
        }
      })
    },
    async fetchPortfolio() {
      const id = this.$route.params.id

      console.log(id )

      this.loading = true
      const accessToken = JSON.parse(window.localStorage.getItem('auth'))

      // const postId = params.id;

      // console.log(postId)


      try {
        const response = await fetch(`${baseUrl}portfolios/${id}`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + accessToken
          },

        }).then(res => res.json())
        // const data = await response.json()
        if (response?.errors) {
          this.$toastr.e(response.error)
        } else {
          this.portfolio = response
          this.portfolio_interests = response.portfolio_interests
          this.totalRows = response.portfolio_interests.length
          console.log(this.portfolio_interests)
        }
      } finally {
        this.loading = false
      }
    },
    async handleLiquid(inactive) {
      this.loading = true
      const accessToken = JSON.parse(window.localStorage.getItem('auth'))
      // this.loading = true
      const id = "b5324daa-4d89-4ebf-97d1-c454603c4e87"

      try {
        const response = await fetch(`${baseUrl}portfolios/${id}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + accessToken
          },
          body: JSON.stringify({portfolio: {status: inactive}})

        }).then(res => res.json())
        // const data = await response.json()
        if (response?.error) {
          this.$toastr.e(response.error)
        } else {

          this.$toastr.s("your funds will be available for withdrawal shortly")

        }
      } finally {
        this.loading = false
      }
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
</style>
