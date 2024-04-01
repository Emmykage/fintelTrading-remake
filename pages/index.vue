<template>
  <div class="bg-[#003b6d]">
    <hero-section class="" />
    <div class="w-11/12 md:w-10/12 mx-auto rounded-md p-6 text-gray-900 bg-white space-y-6">
      <div>  <h1 class="text-2xl text-gray-900 font-medium">Latest Trading News</h1></div>
      <!-- <div class="cryptohopper-web-widget" data-id="5" data-news_count="5" data-news_length="10"></div> -->
      <div class="cryptohopper-web-widget" data-id="5"></div>
    </div>
    <section class="bg-[#003b6d]">
      <div class="cryptohopper-web-widget" data-id="2"></div>
      <div class="container max-w-xl p-6 py-12 mx-auto space-y-10 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 class="lg:text-3xl text-2xl font-bold text-center sm:text-5xl dark:text-gray-50">
            Why choose Fintel Values?
          </h2>
          <p class="mx-auto mt-4 text-sm text-center text-white">
            We use state-of-the-art security measures when handling your account details and personal funds. Your information is SSL encrypted and safely stored.
          </p>
        </div>
        <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div class="mt-12 space-y-12">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium leadi dark:text-gray-50">
                    Security is our top priority
                  </h4>
                  <p class="mt-2 text-white md:text-base text-sm">
                    We use state-of-the-art security measures when handling your account details and personal funds. Your information is SSL
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium leadi dark:text-gray-50">
                    Next-Generation platform
                  </h4>
                  <p class="mt-2 text-white md:text-base text-sm">
                    Our ground-breaking platform can be easily customized to fit your precise level of expertise and trading needs.
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium leadi dark:text-gray-50">
                    24/7 Support
                  </h4>
                  <p class="mt-2 text-white md:text-base text-sm">
                    Our dedicated team of customer support experts are always available to assist you with every need or request, anywhere you are in your native language.
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium leadi dark:text-gray-50">
                    Firm Regulation
                  </h4>
                  <p class="mt-2 text-white md:text-base text-sm">
                    Fintel Values complies with the strictest regulation guidelines, under IFSC (International Financial Services Commission), to ensure the safest trading conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" class="mt-10 lg:mt-0">
            <img :src="require(`~/assets/img/${carouselImages[activeCarouselIndex].url}.jpg`)" alt="" class="mx-auto rounded-lg shadow-lg dark:bg-gray-500 w-[400px] object-cover h-[500px]">
          </div>
        </div>
        <div>
          <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div class="lg:col-start-2">
              <h3 class="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">
                FOCUS ON YOUR BUSINESS
              </h3>
              <p class="mt-2 text-white md:text-base text-sm">
                We Take Care Of The Hard Work For You
              </p>
              <p class="mt-2 text-white md:text-base text-sm">
                we have put together some of the planet's best live trading protocols, paired with an expert team while tapping from the power of Artificial Intelligence.
              </p>
              <div class="mt-12 space-y-12">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leadi dark:text-gray-50">
                      Security
                    </h4>
                    <p class="mt-2 text-white md:text-base text-sm">
                      Your funds are safe and sound, kept in segregated bank accounts and protected by industry-leading security protocols.
                    </p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leadi dark:text-gray-50">
                      Privacy
                    </h4>
                    <p class="mt-2 text-white md:text-base text-sm">
                      Fintel Values is fully compliant with PCI Data Security Standards. We encrypt and protect your information, so you never need to worry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img :src="require(`~/assets/img/${carouselImages[activeCarouselIndex].url}.jpg`)" alt="" class="mx-auto w-[500px] object-cover h-[450px] rounded-lg shadow-lg dark:bg-gray-500">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-20">
      <portfolio-section />
    </section>
    <!-- <AdvertCTA /> -->
    <updated-testimonials />
    <div class="w-11/12 md:w-10/12 mx-auto">
      <div class="cryptohopper-web-widget" data-id="1" data-coins="bitcoin,ethereum,tether,bnb,dogecoin,tron,polkadot" data-table_style="dark" data-realtime="on" />
    </div>
    <b-modal
      id="bv-modal-example"
      hide-footer
      hide-header
      centered
      title="BootstrapVue"
      class="bg-red-600"
      body-bg-variant="light"
    >
      <div class="flex flex-col items-center max-w-lg gap-4 p-6 sm:py-8 sm:px-12">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-40 h-40 fill-current shrink-0 dark:text-violet-400">
          <path d="M68.328,383.063a31.654,31.654,0,0,1,.207-32.118l50.883-86.406,11.516,50.76,31.207-7.08L138.257,202.944,32.983,226.828l7.08,31.207,53.149-12.058L40.96,334.707a64,64,0,0,0,55.149,96.476h82.435l32-32H96.109A31.655,31.655,0,0,1,68.328,383.063Z" />
          <path d="M283.379,79.762l53.747,91.268-49.053-7.653-4.934,31.617L389.8,211.635l16.64-106.66-31.617-4.933-8.873,56.87L310.954,63.524a64,64,0,0,0-110.3,0l-39.939,67.82,10.407,45.39,57.106-96.972a32,32,0,0,1,55.148,0Z" />
          <path d="M470.65,334.707l-47.867-81.283-41.148-6.812,61.441,104.333A32,32,0,0,1,415.5,399.183H304.046l38.359-38.358L319.778,338.2l-76.332,76.332,76.332,76.333,22.627-22.628-37.052-37.051H415.5a64,64,0,0,0,55.149-96.476Z" />
        </svg>
        <h2 class="text-2xl font-semibold leading-loosed text-center">
          Get 10% cashback for deposits above $5,000!
          Free $100 on all new sign ups
        </h2>
        <p class="flex-1 text-center dark:text-gray-400">
          Offer valid for limited period
        </p>
        <button type="button" class="px-8 py-2 font-semibold rounded-full dark:bg-violet-400 dark:text-gray-900" @click="$bvModal.hide('bv-modal-example')">
          Continue
        </button>
      </div>
    </b-modal>
    <div class="flex justify-center items-center w-11/12 mx-auto">
      <div id="chart-widget" />
    </div>
  </div>
  
</template>

<script>
import PortfolioSection from '@/components/PortfolioSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import AdvertCTA from '@/components/AdvertCTA.vue'
import UpdatedTestimonials from '../components/UpdatedTestimonials.vue';
export default {
  name: 'IndexPage',
  components: { HeroSection, AdvertCTA, PortfolioSection, UpdatedTestimonials },

  data () {
    return {
      activeCarouselIndex: 0,
      tradingWidgetUrl: 'https://webdev.prosp.devexperts.com:8095/widget/vendors.js',
      timer: 0,
      carouselImages: [
        {
          id: 1,
          url: 'trading1'
        },
        {
          id: 2,
          url: 'trading2'
        },
        {
          id: 3,
          url: 'trading3'
        },
        {
          id: 4,
          url: 'trading4'
        },
        {
          id: 5,
          url: 'trading5'
        }
      ]
    }

  },
  mounted () {
    this.startSlider()
    // this.$bvModal.show('bv-modal-example')
  },
  unmounted () {
    clearInterval(this.timer)
  },
  methods: {
    startSlider () {
      this.timer = setInterval(this.next, 5000)
    },
    next () {
      this.activeCarouselIndex += 1
      if (this.activeCarouselIndex === 5) {
        this.activeCarouselIndex = 0
      }
    },
    previous () {
      this.activeCarouselIndex -= 1
    }
  }
}
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>
