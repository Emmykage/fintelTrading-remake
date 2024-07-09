<template>
  <section class="dark:bg-[#003b6d] ">
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="">
        <div class="h-72 flex items-center justify-center" >
          <h2 class="text-center text-3xl max-w-2xl m-auto" >
            Invest in a Sustainable Future with Renewable Energy

          </h2>
        </div>


        <div class="h-[460px] shadow bg-hero">
          <div class="flex flex-col px-3 md:flex-row m-auto max-w-6xl pt-10 bg-slate-100/80 md:px-10">
            <div class=" flex-1"></div>
            <div class=" flex-1">
              <h2 class="text-3xl">WHAT'S NEW? </h2>
              <p class="py-4">
               we believe in the power of smart investments to shape a better world. That’s why we’re excited to offer you the opportunity to invest in renewable energy projects. Join us in driving the transition to a sustainable, clean energy future while earning attractive returns on your investments.
              </p>


            </div>
          </div>

        </div>


      </div>
        <div class="px-3">

        <h4 class="text-3xl text-center my-8 ">Why Invest in Renewable Energy?</h4>

        <div class="grid md:grid-cols-2 max-w-4xl gap-10 m-auto pt-10">

        <div>
          <h6 class="text-2xl my-3">1. Environmental Impact
          </h6>
          <p>
            Investing in renewable energy helps reduce greenhouse gas emissions, combat climate change, and promote environmental sustainability. By supporting wind, solar, hydro, and other renewable energy projects, you’re contributing to a cleaner, greener planet
          </p>
        </div>
        <div>
          <h6 class="text-2xl my-3">2.            Economic Growth</h6>
          <p>
            The renewable energy sector is one of the fastest-growing industries globally. Investments in this sector not only support environmental goals but also stimulate economic growth by creating jobs and fostering technological innovations.          </p>
        </div>
        <div>
          <h6 class="text-2xl my-3">3.            Financial Returns

          </h6>
          <p>
            Renewable energy projects offer competitive returns, often with lower risk profiles compared to traditional energy investments. As global demand for clean energy rises, so do the opportunities for profitable investments.          </p>
        </div>
        <div>
          <h6 class="text-2xl my-3">4.             Energy Independence

          </h6>
          <p>
            Renewable energy sources, such as wind and solar, provide a pathway to energy independence. Investing in these technologies reduces reliance on fossil fuels and enhances energy security.          </p>
        </div>

      </div>

      </div>

      <div class="m-auto max-w-7xl py-10 ">
        <h4 class="text-center text-3xl my-2 font-medium">Our Renewable Energy Investment Opportunities
        </h4>

        <div class="">

          <div class="bg- py-10 px-3 text-left grid md:grid-cols-2 w-full m-auto gap-3">
            <div>
              <div class="flex items-center gap-2">

                <h5 class="font-medium text-gray-800 text-xl">            Solar Energy Projects             </h5>
                <hr class=" border-black bg-green-600 flex-1 "/>
              </div>
              <div class="flex my-10 gap-4">
                <img src="~/assets/img/png/renewable-energy-solar-icon.png" alt="bio" class="w-16 h-16">

                <p class="md:px-10 font-medium text-gray-500 text-sm ">
                  Invest in solar farms and rooftop solar installations that harness the power of the sun to generate clean electricity.

                </p>

              </div>



            </div>
          <div>
            <div class="flex items-center gap-2">

              <h5 class="font-medium text-gray-800 text-xl">                         Wind Energy Projects
              </h5>
              <hr class=" border-black bg-green-600 flex-1 "/>
            </div>
            <div class="flex my-10 gap-4">
              <img src="~/assets/img/png/renewable-energy-icon.png" alt="bio" class="w-16 h-16">

              <p class="md:px-10 font-medium text-gray-500 text-sm ">
                Support wind farms that capture the energy of the wind, providing a reliable and sustainable energy source.


              </p>
            </div>



          </div>
          <div>
            <div class="flex items-center gap-2">

              <h5 class="font-medium text-gray-800 text-xl">                          Hydropower Projects
              </h5>
              <hr class=" border-black bg-green-600 flex-1 "/>
            </div>
            <div class="flex my-10 gap-4">
              <img src="~/assets/img/png/water-turbine-icon.png" alt="bio" class="w-16 h-16">

              <p class="md:px-10 font-medium text-gray-500 text-sm ">
                Invest in hydroelectric power stations that use flowing water to produce renewable energy with minimal environmental impact.
              </p>

            </div>



          </div>
          <div>
            <div class="flex items-center gap-2">

              <h5 class="font-medium text-gray-800 text-xl">                          Bioenergy Projects
              </h5>
              <hr class=" border-black bg-green-600 flex-1 "/>
            </div>
            <div class="flex my-10 gap-4">
              <img src="~/assets/img/png/noun-biomass-energy-1147942.png" alt="bio" class="w-16 h-16">
              <p class="md:px-10 font-medium text-gray-500 text-sm ">
                Contribute to projects that convert organic materials into energy, supporting a circular economy and reducing waste.
              </p>
            </div>



          </div>


        </div>

        <nuxt-link to="/login" class="self-center border-gray-300 py-2 px-3 rounded inline-block border text-gray-300 bg-blue-700 cursor-pointer ml-12 hover:text-blue-800 hover:bg-white transition-all ease-out duration-300 font-semibold ">
          Get Started
        </nuxt-link>

        </div>
      </div>

  </section>
  </section>
</template>
<style scoped>
.bg-hero{
  background: linear-gradient(rgba(255, 255, 255, 0.473), rgba(255, 255, 255, 0.637)), url('~assets/img/renewableenergy.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}
</style>
