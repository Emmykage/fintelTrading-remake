<template>
  <main class="w-10/12 mx-auto space-y-4">
    <h1 class="text-center text-3xl font-bold text-white">
      Our Portfolio
    </h1>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
      <div
        v-for="(itm, idx) in portfolios"
        :key="idx"
        class="relative overflow-hidden cursor-pointer rounded-lg shadow transition hover:shadow-lg"
        @click="handleClick(itm)"
      >
        <img
          alt="Office"
          :src="itm.imgUrl"
          class="absolute inset-0 h-full w-full object-cover"
        >

        <div
          class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
        >
          <div class="p-4">
            <nuxt-link :to="`/portfolio/${itm.url}`" class="p-4 sm:p-6">
              <!-- <time datetime="2022-10-10" class="block text-xs text-white/90">
                Portfolio ({{ idx + 1 }})
              </time> -->

              <h3 class="mt-0.5 text-xl text-white">
                {{ itm.name }}
              </h3>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95 font-semibold">
                {{ itm.description }}
              </p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      portfolios: [
        {
          name: 'Chevin Fleet Solutions',
          url: 'chevin-fleet-solutions',
          description: 'Belper business Chevin Fleet Solutions, is the leading global provider of fleet management software solutions to customers in both private and public sectors, with offices in the UK, USA, Belgium, France, and Australia. Its flagship fleet management product, ‘FleetWave’, is used in more than 180 countries across multiple sectors to manage around two million vehicles and associated assets. Chevin has identified a growing demand for SaaS (Software as a Service) and plans to use the funding to support commercial opportunities and target the SME market on a global scale. The company is also planning to create 20 new jobs to aid its expansion.',
          imgUrl: 'https://www.mavencp.com/hubfs/chevin-fleet-solutions-1.jpg'
        },
        {
          name: 'Delio',
          url: 'delio',
          description: 'FinTech provider Delio offers a white label software solution that helps global financial institutions enhance and improve their client systems. Delio works with banks, wealth managers, family offices, angel networks, and investment funds to deliver customised technology platforms that optimise the distribution, transacting and reporting of investment opportunities to their investors.  An integrated digital toolkit drives efficiency, grows revenues and improves the client experience in a robust and compliant manner.',
          imgUrl: 'https://www.mavencp.com/hubfs/delio-team.jpg'
        },
        {
          name: 'Envitia',
          url: 'envitia',
          description: 'Envitia Group is an established data and geospatial technology services provider to both the private and public sectors. Envitia works with organisations to solve data challenges, delivering high-performance modelling and geospatial intelligence solutions to help them harness the power of data as a valuable resource to deliver clear actionable insights to make better, faster and more informed decisions. Envitia specialises in areas such as data discovery and access, data modelling, data quality, AI / Machine Learning, analytics and visualisation all within a geospatial niche. The business has grown rapidly and enjoys working relationships with a diverse customer base, including over 70 Tier 1 clients.',
          imgUrl: 'https://www.mavencp.com/hubfs/Digital%20Transformation.jpg'
        },
        {
          name: 'Indigo',
          url: 'indigo',
          description: 'In December 2018 Fintel Values Investor Partners exited from Indigo Belcom generating a 4.2x return in just two years since it first invested. Indigo designs, installs and maintains telecom networks across the UK and Europe, enabling customers such as Vodafone, Sky and BT to deliver fixed line, broadband, mobile and other data services to a wide variety of corporate, enterprise and consumer end users. Fintel Values supported the business with the strategic acquisition of Belcom247 in September 2017, together forming the enlarged Indigo-Belcom Group. Following the successful acquisition, revenues increased from £12 million to a forecast of over £30 million in the year the exit completed, with underlying profits increasing from £1.3 million to over £4 million.',
          imgUrl: 'https://www.mavencp.com/hubfs/indigo-servers.jpg'
        }
      ]
    }
  },
  methods: {
    handleClick (itm) {
      this.$router.push(`/portfolio/${itm.url}`)
    }
  }
}
</script>

<style>

</style>
