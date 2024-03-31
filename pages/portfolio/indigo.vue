<template>
  <main>
    <section
      class="overflow-hidden h-screen bg-[url(https://www.mavencp.com/hubfs/indigo-servers.jpg)] bg-cover bg-top bg-no-repeat grid place-content-center relative"
    >
      <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 class="text-4xl font-bold text-white sm:text-3xl md:text-5xl">
            Indigo
          </h2>
        </div>
      </div>
      <div class="mx-auto w-full absolute bottom-0 ">
        <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 bg-gray-800 py-3">
          <div v-for="(item, idx) in portfolioDetails" :key="idx" class="space-y-2 w-10/12 mx-auto">
            <h1 class="font-bold text-white">
              {{ item.title }}
            </h1>
            <p class="font-light text-white text-sm lg:text-base">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-16 w-11/12 mx-auto text-white">
      <div class="lg:flex flex-col lg:flex-row lg:gap-x-10 space-y-10 lg:space-y-0">
        <div class="lg:w-6/12 order-last">
          <p class="text-gray-900 text-base leading-loose">
            In December 2018 Fintel Values Investor Partners exited from Indigo Belcom generating a 4.2x return in just two years since it first invested. Indigo designs, installs and maintains telecom networks across the UK and Europe, enabling customers such as Vodafone, Sky and BT to deliver fixed line, broadband, mobile and other data services to a wide variety of corporate, enterprise and consumer end users.
          </p>
          <p class="text-gray-800 text-base leading-loose mt-10">
            Fintel Values supported the business with the strategic acquisition of Belcom247 in September 2017, together forming the enlarged Indigo-Belcom Group. Following the successful acquisition, revenues increased from £12 million to a forecast of over £30 million in the year the exit completed, with underlying profits increasing from £1.3 million to over £4 million.
          </p>
        </div>
        <div class="lg:w-6/12 order-first">
          <img src="https://www.mavencp.com/hubfs/img-Indigo_Logo_RGB_Clr.png" class="h-[200px]" alt="">
        </div>
      </div>
    </section>
    <section class="text-gray-900 body-font">
      <div class="container px-5 pb-16 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center border-4 border-yellow-600 shadow-md rounded-md p-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
          </svg>
          <p class="leading-relaxed text-sm">
            The business has grown tremendously in the last two years following the MBO. As well as the acquisition and integration of Belcom247, the Group has grown organically at an exceptional rate, expanded into new state of the art facilities, and doubled headcount. It’s been an exciting period and we have welcomed the support and financial backing Fintel Values during this time.
          </p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
          <p class="text-gray-500 font-semibold">
            Stephen Thompson, CEO at Indigo
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      portfolioDetails: [
        {
          title: 'Deal Type',
          description: 'Realisation'
        },
        {
          title: 'Initial Investment',
          description: 'July 2016'
        },
        {
          title: 'Sector',
          description: 'Technology'
        },
        {
          title: 'Fund',
          description: 'Private Equity Growth Capital | VCTs'
        },
        {
          title: 'Status',
          description: 'Realised'
        }
      ]
    }
  }
}
</script>
