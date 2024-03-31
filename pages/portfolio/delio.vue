<template>
  <main>
    <section
      class="overflow-hidden h-screen bg-[url(https://www.mavencp.com/hubfs/delio-team.jpg)] bg-cover bg-top bg-no-repeat grid place-content-center relative"
    >
      <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 class="text-4xl font-bold text-white sm:text-3xl md:text-5xl">
            Delio
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
    <section class="py-16 w-11/12 mx-auto bg-white">
      <div class="lg:flex lg:gap-x-10 lg:space-y-0">
        <div class="lg:w-6/12">
          <p class="text-gray-900 text-base leading-loose">
            FinTech provider Delio offers a white label software solution that helps global financial institutions enhance and improve their client systems. Delio works with banks, wealth managers, family offices, angel networks, and investment funds to deliver customised technology platforms that optimise the distribution, transacting and reporting of investment opportunities to their investors.  An integrated digital toolkit drives efficiency, grows revenues and improves the client experience in a robust and compliant manner.
          </p>
          <p class="text-gray-800 text-base leading-loose mt-10">
            Delio’s clients, which includes Coutts, ING and Barclays, manage over £350 billion across a variety of asset classes and over £1.5 billion of opportunities are being transacted across the Delio infrastructure. It’s technology is enabling these organisations to manage their investor base more efficiently, whilst ensuring that they remain compliant; Delio are one of the few white label software platform providers regulated by the FCA. Fintel Values's funding will support Delio to grow its international sales team across important global financial locations across Europe, Asia, the Middle East and North America.
          </p>
        </div>
        <div class="lg:w-6/12">
          <img src="https://www.mavencp.com/hubfs/Imported_Blog_Media/Delio_Logo_logo.png" class="h-[200px]" alt="">
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
            To reach this milestone and receive this backing from Fintel Values is not just recognition of the work put in by the team to date, but it’s an indication of the sizeable near term growth opportunity. The financial support will enable us to accelerate our hiring roadmap in key geographies, whilst continuing to look at how our flexible technology infrastructure and expertise can support the increasing number of organisations looking to do more in private markets.
          </p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
          <p class="text-gray-900 font-semibold">
            Gareth Lewis, Chief Executive at Delio
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
          description: 'Growth Capital'
        },
        {
          title: 'Initial Investment',
          description: 'August 2019'
        },
        {
          title: 'Sector',
          description: 'Technology'
        },
        {
          title: 'Fund',
          description: 'Growth Capital | VCTs'
        },
        {
          title: 'Status',
          description: 'Current'
        }
      ]
    }
  }
}
</script>
