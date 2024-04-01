<template>
  <main class="lg:flex text-white gap-x-3 space-y-10 lg:space-y-0">
    <section class="space-y-6 lg:w-8/12 lg:h-screen overflow-y-auto sticky">
      <section class="">
        <div class="space-y-2">
          <p class="text-gray-500">
            Total Balance
          </p>
          <div class="flex items-center gap-x-2">
            <h1 class="text-white text-3xl font-semibold">
              1.82937456
            </h1> <span class="block  bg-[#5CC5F7] px-3 py-1 rounded-md font-medium text-xs">BTC</span>
          </div>
          <p class="text-gray-500">
            $20,974.23
          </p>
        </div>
      </section>
      <div class="md:flex w-full gap-x-10 pt-6 space-y-6 lg:space-y-0">
        <div class="h-full rounded-lg py-3 bg-white border space-y-6 w-full">
          <div class="flex justify-between items-center px-6">
            <p class="font-medium">
              Market Analysis
            </p>
            <div>
              <select class="border outline-none rounded-md bg-gray-100 text-sm px-3 py-2.5">
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>
          <graph-2 />
        </div>
      </div>
      <div>
        <trading-overview />
      </div>
    </section>
    <section class="lg:w-3/12 px-2 lg:space-y-4 space-y-10 lg:h-screen overflow-y-auto lg:fixed top-32 right-0 lg:pr-6">
      <div class="space-y-10 pr-10">
        <h1>Recent Transactions</h1>
        <div class="space-y-6">
          <div
            v-for="n in [{
              name: 'Bitcoin',
              action: 'Buy',
              duration: 'Today, 15:20 PM',
              amount: '$5,642',
              url: 'eth'
            }, {
              name: 'Ethereum',
              action: 'Received',
              duration: 'Today, 10:20 AM',
              amount: '+0.245 ETH',
              url: 'bit'
            }, {
              name: 'Polkadot',
              action: 'Buy',
              duration: 'Today, 15:20 PM',
              amount: '$5,642',
              url: 'eth'
            }, {
              name: 'Cardano',
              action: 'Received',
              duration: 'Yesterday, 17:20 PM',
              amount: '$3,642',
              url: 'bit'
            }]"
            :key="n"
            class="flex justify-between items-center"
          >
            <div class="flex items-center gap-x-2">
              <div><img :src="require(`~/assets/img/${n.url}.png`)" alt="" class="h-6 w-6"></div>
              <div>
                <h1 class="text-sm">
                  {{ n.name }}
                </h1>
                <p class="text-xs text-gray-500">
                  {{ n.action }}
                </p>
              </div>
            </div>

            <div>
              <h1 class="text-sm">
                {{ n.amount }}
              </h1>
              <p class="text-xs text-gray-500">
                {{ n.duration }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full space-y-6 pr-10">
        <h1>Assets</h1>
        <div class="lg:space-y-6 flex-col space-y-6 md:space-y-0 md:flex md:flex-row lg:flex-col gap-x-6 justify-between items-center">
          <div class="px-3 w-full pt-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 bitcoin border border-red-500 h-[100px]">
            <div class="flex justify-between items-center">
              <p class="font-bold text-white">
                BTC
              </p>
              <h1 class="font-semibold text-white">
                $234,542,326
              </h1>
            </div>
            <div class="flex justify-between items-center" />
          </div>

          <div class="px-3 w-full pt-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 bitcoin border border-red-500 h-[100px]">
            <div class="flex justify-between items-center">
              <p class="font-bold text-white">
                ETH
              </p>
              <h1 class="font-semibold text-white">
                $234,542,555
              </h1>
            </div>
            <div class="flex justify-between items-center" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'dashboard',
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

<style scoped>
 .bitcoin {
   background: url('@/assets/img/bitcoin.jpg');
   background-repeat: no-repeat;
   background-size: cover;
 }
</style>
