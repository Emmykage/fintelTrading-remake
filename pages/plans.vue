<template>
  <section class="dark:bg-[#003b6d]">
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-14 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Investment Plans</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500"> Outlined are our plans.</p>
          <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
            <button class="py-1 px-4 focus:outline-none">Annually</button>
          </div>
        </div>
        <div class="flex items-start justify-center flex-wrap -m-4 gap-5">
          <div class="xl:w-1/4 md:w-1/2 w-full text-white">
            <div class="h-full bg-white p-0 rounded-lg shadow flex flex-col relative overflow-hidden">
              <div class="h-64 bg-gray-100 text-center py-5">
                <h2 class="text-lg text-center tracking-widest title-font mb-1 font-semibold text-gray-800">Platinum Plan </h2>
                <!-- <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">$400 to $4999</h1> -->
                <h1 class="text-5xl text-gray-900 leading-none">
                  <p class="block font-semibold">$400</p>
                  <p class="text-lg ml-1 font-medium text-gray-500">/month</p>
                </h1>

                <nuxt-link to="/dashboard" class="block w-max m-auto bg-gray-950 text-white py-2 px-10 rounded-sm my-4"> Get Started</nuxt-link>
              </div>

              <div class="py-4">


              <p class="flex px-6 items-center text-sm text-gray-800 font-semibold mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>  The Platinum Plan (29%) Monthly
              </p>

              <p class="px-6 pt-2 font-semibold flex text-sm mb-2 text-gray-800">
                <span class="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span> Daily profits return guaranteed
              </p>
              <p class="px-6 pt-2 font-semibold flex text-sm text-gray-800 mb-2">
                <span class="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span> Annual trading reports
              </p>
              <p class="px-6 pt-2 font-semibold flex text-sm text-gray-800 mb-2">
                <span class="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span> Eligible for compounding returns (exponential growth)

              </p>
              <p class="px-6 pt-2 font-semibold flex text-sm text-gray-800 mb-2">
                <span class="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span> Weekly/monthly payouts
              </p>

              <!-- <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Mixtape chillwave tumeric
              </p> -->
            </div>

            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 w-full text-white ">
            <div class="h-full bg-white p-0 rounded-lg shadow flex flex-col relative overflow-hidden">
              <div class="h-64 bg-gray-100 text-center py-5">
                <h2 class="text-lg text-center tracking-widest title-font mb-1 font-semibold text-gray-800">Diamond Plan </h2>
                <!-- <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">$400 to $4999</h1> -->
                <h1 class="text-5xl text-gray-900 leading-none">
                  <p class="block font-semibold">$5000</p>
                  <p class="text-lg ml-1 font-medium text-gray-500">/month</p>
                </h1>

                <nuxt-link to="/dashboard" class="block w-max m-auto bg-gray-950 text-white py-2 px-10 rounded-sm my-4"> Get Started</nuxt-link>
              </div>

              <div class="py-4">


              <p class="flex px-6 items-center text-sm text-gray-800 font-semibold mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>  The Diamond plan starts trading from $5000 to $5M
              </p>
              <p class="px-6 pt-2 text-gray-800 font-semibold flex text-sm mb-2">
                <span class="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span> The Diamond Plan (35%) Monthly
              </p>
              <p class="px-6 pt-2 font-semibold flex text-sm mb-2 text-gray-800">
                <span class="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span> Daily profits return guaranteed
              </p>
              <p class="px-6 pt-2 font-semibold flex text-sm text-gray-800 mb-2">
                <span class="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span> Annual trading reports
              </p>
              <p class="px-6 pt-2 font-semibold flex text-sm text-gray-800 mb-2">
                <span class="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span> Eligible for compounding returns (exponential growth)

              </p>
              <p class="px-6 pt-2 font-semibold flex text-sm text-gray-800 mb-2">
                <span class="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span> Weekly/monthly payouts
              </p>
              <p class="px-6 pt-2 font-semibold flex text-sm text-gray-800 mb-2">
                <span class="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span> Lifetime trading

              </p>
              <p class="px-6 pt-2 font-semibold flex text-sm text-gray-800 mb-2">
                <span class="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span> Private fund manager
              </p>
              <!-- <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Mixtape chillwave tumeric
              </p> -->
            </div>

            </div>
          </div>

        </div>
      </div>
    </section>
     <!-- <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Investment Plans
        </h1>
        <p class="lg:w-1/2 text-lg w-full text-white leading-relaxed text-opacity-80">
          Outlined are our plans.
        </p>
      </div>
      <section class="body-font">
        <div class="container px-5 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col text-white bg-black">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    The Platinum Plan (29%) Monthly
                  </h2>
                  <p class="leading-relaxed text-base">
                    The Platinum plan starts trading from $400 to $4999
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col text-white bg-black">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    The Diamond Plan (35%) Monthly
                  </h2>
                  <p class="leading-relaxed text-base">
                    The Platinum plan starts trading from $5000 to $5M
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div> -->
  </section>
</template>

<script>
// MyRegistrationComponent.vue
