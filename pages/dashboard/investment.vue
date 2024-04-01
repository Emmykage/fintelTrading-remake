<template>
  <section>
    <!-- <div class="container p-2 mx-auto sm:p-4 border border-gray-100 bg-white rounded-md space-y-4">
      <div class="space-y-1 pl-3">
        <h2 class="text font-semibold leading-loosed">
          Current Investments
        </h2>
        <p class="text-gray-600 text-xs">
          Current Investments
        </p>
      </div>
      <div class="overflow-x-auto h-[410px]">
        <table class="min-w-full text-xs">
          <colgroup>
            <col>
            <col>
            <col>
            <col>
            <col>
            <col class="w-24">
          </colgroup>
          <thead class="bg-white border-b sticky top-0">
            <tr class="text-left">
              <th v-for="(item, index) in tableHeaders" :key="index" class="p-3">
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="({invoice, client, issued, issuedDay, due, dueDay, amount, status}, index) in tableData" :key="index" class="border-b border-opacity-20 border-gray-700 bg-white">
              <td class="px-3 py-4">
                <p>{{ invoice }}</p>
              </td>
              <td class="px-3 py-4">
                <p>{{ client }}</p>
              </td>
              <td class="px-3 py-4">
                <p>{{ issued }}</p>
                <p class="dark:text-gray-400">
                  {{ issuedDay }}
                </p>
              </td>
              <td class="px-3 py-4">
                <p>{{ due }}</p>
                <p class="dark:text-gray-400">
                  {{ dueDay }}
                </p>
              </td>
              <td class="px-3 py-4">
                <p>{{ amount }}</p>
              </td>
              <td class="p-3 py-4 text-right">
                <span class="px-3 py-2 font-medium text-xs rounded-md text-white" :class="[status == 'pending' ? 'bg-yellow-500' : 'bg-green-500']">
                  <span>{{ status }}</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> -->
    <section class="text-gray-600 body-font text-white">
      <div class="container px-5  mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Pricing</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
        </div>
        <div class="lg:w-2/3 w-full mx-auto overflow-auto">
          <table class="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-3">Start</td>
                <td class="px-4 py-3">5 Mb/s</td>
                <td class="px-4 py-3">15 GB</td>
                <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                <td class="w-10 text-center">
                  <input name="plan" type="radio">
                </td>
              </tr>
              <tr>
                <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
                <td class="border-t-2 border-gray-200 w-10 text-center">
                  <input name="plan" type="radio">
                </td>
              </tr>
              <tr>
                <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
                <td class="border-t-2 border-gray-200 w-10 text-center">
                  <input name="plan" type="radio">
                </td>
              </tr>
              <tr>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
                <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                  <input name="plan" type="radio">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  layout: 'user-dashboard',
  data () {
    return {
      tableData: [{
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'pending'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'completed'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'pending'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'completed'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'pending'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'completed'
      },
      {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'pending'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'completed'
      },
      {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'pending'
      }, {
        invoice: '97412378923',
        client: 'Microsoft Corporation',
        issued: '14 Jan 2022',
        issuedDay: 'Friday',
        due: '01 Feb 2022',
        dueDay: 'Tuesday',
        amount: '$15,792',
        status: 'completed'
      }],
      tableHeaders: ['invoice', 'client', 'issued', 'due', 'amount', 'status']
    }
  }
}
</script>

<style>

</style>
