<template>
  <main>
    <section class="overflow-hidden bg-[url(@/assets/img/team-members.jpg)] bg-cover bg-top bg-no-repeat">
      <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24 py-60" data-aos="fade-up" data-aos-delay="300">
        <div class="text-center flex justify-center items-center flex-col ltr:sm:text-left rtl:sm:text-right space-y-6">
          <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Our story
          </h2>

          <p
            class="text-center text-sm md:text-base max-w-2xl text-white/90 md:mt-6 md:block font-medium md:leading-relaxed"
          >
            Fintel Values is a leading private equity and property manager, with around 100 executives based across our UK office network. We partner with ambitious, entrepreneurial management teams to accelerate growth, and serve thousands of investors with the goal of delivering exceptional returns.
          </p>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font bg-white">
      <div class="md:container md:px-5 py-24 mx-auto flex flex-wrap flex-col">
        <div class="flex w-11/12 md:w-6/12 mx-auto justify-center items-center flex-wrap mb-20" data-aos="zoom-in" data-aos-delay="500">
          <a href="#whoweare" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>Who we are
          </a>
          <a href="#meettheteam" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>Meet the team
          </a>
          <a href="#ourvalues" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="5" r="3" />
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
            </svg>Our values
          </a>
        </div>
        <div id="whoweare" class="flex flex-col text-center md:w-full mx-auto w-11/12" data-aos="zoom-in" data-aos-delay="500">
          <h1 class="text-2xl md:text-4xl font-bold title-font mb-4 text-gray-900">
            Who we are
          </h1>
          <div class="space-y-4">
            <p class="lg:w-2/3 mx-auto leading-relaxed text-sm md:text-base">
              Fintel Values was formed in 2009 following a management buyout of the private equity business of Aberdeen Asset Management PLC. The senior team who led the transaction have worked together since 2004 and have transformed Fintel Values into one of the UK’s most active SME investors, helping hundreds of management teams to achieve their business ambitions.
            </p>

            <p class="lg:w-2/3 mx-auto leading-relaxed text-sm md:text-base">
              We now have a presence across all regions of the UK, with a team that is recognised as having a collaborative and respectful culture, in supporting the growth of a wide range of public and private companies.
            </p>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-sm md:text-base">
              In 2021 Fintel Values was acquired by Mattioli Woods PLC, a leading provider of specialist wealth management and financial planning services. This partnership continues our ethos of supporting ambition, working with like-minded people who share the same passion and enthusiasm for delivering exceptional client outcomes.
            </p>
          </div>
        </div>
        <div id="meettheteam" data-aos="fade-up" data-aos-delay="300">
          <div class="mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div class="relative z-10 lg:py-16">
                <div class="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt="House"
                    src="@/assets/img/team-members.jpg"
                    class="absolute inset-0 h-full w-full object-cover"
                  >
                </div>
              </div>

              <div class="relative flex items-center bg-gray-100">
                <span
                  class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                />

                <div class="p-8 sm:p-16 lg:p-24">
                  <h2 class="text-xl font-bold sm:text-3xl">
                    Meet the Fintel Values team
                  </h2>

                  <p class="mt-4 text-gray-600 leading-loose">
                    Our people have been critical to our success. People and partnerships sit at the heart of everything we do. That is why our highly experienced team are embedded in their local business and corporate finance communities, helping cultivate the relationships that deliver better client and company outcomes.
                  </p>

                  <div class="w-full">
                    <button
                      href="#"
                      class="mt-8 inline-block w-full rounded border py-3 border-indigo-600 bg-indigo-600 px-12 py-2-5 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="ourvalues" class="text-gray-900 body-font mt-10" data-aos="zoom-in" data-aos-delay="500">
          <h1 class="md:text-4xl text-2xl text-center font-bold">
            Our values
          </h1>
          <div class="container px-5 pb-24 pt-10 mx-auto flex flex-wrap">
            <div class="flex flex-wrap w-full">
              <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <p class="leading-relaxed text-sm md:text-base">
                      We believe that the most effective way to build strong relationships with management teams is to operate at a local level.
                    </p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <p class="leading-relaxed text-sm md:text-base">
                      We build lasting relationships based on trust and respect through being an effective and active investor without diluting the ability of the management team to run the business.
                    </p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="5" r="3" />
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <p class="leading-relaxed text-sm md:text-base">
                      We look to invest responsibly, including backing businesses that are making a real impact on addressing environmental, social and governance issues facing society today.
                    </p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <p class="leading-relaxed text-sm md:text-base">
                      Fintel Values is a signatory to the Investing in Women Code, a commitment to support the advancement of female entrepreneurship in the UK.
                    </p>
                  </div>
                </div>
                <div class="flex relative">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <p class="leading-relaxed text-sm md:text-base">
                      Our core investment objective is to help deliver growth and maximise shareholder value.
                    </p>
                  </div>
                </div>
              </div>
              <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 hidden md:block" src="@/assets/img/our-values.jpg" alt="step">
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
