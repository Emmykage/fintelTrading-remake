<template>
  <main>
    <section>
      <div class="flex items-center justify-between my-3 gap-10">
        <button class="outline-none border bg-gray-200 text-black px-3 py-1 rounded-md text-sm" @click="goBack()">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none"
            stroke="#747070" stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel">
            <path d="M19 12H6M12 5l-7 7 7 7" />
          </svg>
        </button>
        <h2 class="flex-1 text-xl font-semibold">
          Portfolios
        </h2>

      </div>


      <div  class="flex justify-start gap-[2%]">
        <a v-for="{plan, status, id, amount} in portfolioList" :key="id" class="relative basis-[100%] sm:basis-[40%] lg:w-[27%] border rounded-md h-48 hover:shadow-slate-400 bg-gray-50 cursor-pointer" @click="handleNav(id)">
          <h3 class="text-xl font-semibold text-center my-3 text-red-600  underline">{{plan.value}}</h3>
          <p class="text-center text-gray-900">@</p>
          <h2 class="text-center text-3xl font-medium text-gray-600 my-3">29% </h2>
          <div class="flex justify-center w-[75%] m-auto font-semibold text-center">
              <!-- <span>Value</span> -->
              <span>{{formatNumberAsDollar(amount)}}</span>

          </div>
          <span v-if="status == 'active'" class="absolute top-0 right-0 bg-green-500 px-4">active</span>
          <span v-else class="absolute top-0 right-0 bg-gray-400 px-4">inactive</span>

        </a>
      </div>
    </section>
  </main>
</template>
<script>
import {baseUrl} from '~/assets/api/baseUrl'
export default {
  name:"Portfolio",
  components:{},
  layout: "user-dashboard",
  scrollToTop: true,

  data(){
    return {
      portfolioList: [],
      userInfo: {},
      fields:[
        {
          key: 'sn',
          label: 'S/N',
          class:""
        },
        {
          key: 'plan',
          label: 'Plan',
          class:""
        },
        {
          key: 'amount',
          label: 'Amount',
          class:""
        }
      ],
      currentPage: 1,
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
  mounted(){
    this.fetchPortfolios()
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    },

    handleNav(id){
      this.$router.push('/dashboard/portfolios/portfolio_id/' + id)
    },
    async fetchPortfolios(){
      this.loading = true
      const accessToken = JSON.parse(localStorage.getItem("auth"))
      console.log(accessToken)
      try {
        const response = await fetch(`${baseUrl}portfolios`, {
          method: "GET",
          headers: {
            'content-type': "application/json",
            authorization: "Bearer " + accessToken
          }
        }).then(res => res.json())
        if(response?.error){
          this.$toastr.e(response.error)
        }else{
          this.userInfo = response
          this.portfolioList = response

          console.log(response)
        }

      } catch (error) {
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
<style>
.no_underline{
  text-decoration: none !important;
}

</style>
