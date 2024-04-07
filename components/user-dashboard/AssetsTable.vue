<template>
  <div class="container p-2 mx-auto sm:p-4 text-gray-100 rounded-md">
    <div class="overflow-x-auto rounded-lg">
      <table class="min-w-full text-xs">
        <colgroup>
          <col>
          <col>
          <col>
          <col>
        </colgroup>
        <thead class="bg-blue-50">
          <tr class="text-left">
            <th class="p-3 text-blue-600">
              Asset
              <span class="inline inline-flex"><img
                src="@/assets/img/red-arrow.svg"
                alt=""
              ></span>
            </th>
            <th class="p-3 text-blue-600">
              Price
              <span class="inline inline-flex"><img
                src="@/assets/img/gray-arrow.svg"
                alt=""
              ></span>
            </th>
            <th class="p-3 text-blue-600">
              Balance
              <span class="inline inline-flex"><img
                src="@/assets/img/gray-arrow.svg"
                alt=""
              ></span>
            </th>
            <th class="p-3 text-blue-600">
              Proportion
              <span class="inline inline-flex"><img
                src="@/assets/img/red-arrow.svg"
                alt=""
              ></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(itm, index) in assetsList"
            :key="index"
            class="border-b hover:text-white border-opacity-20 text-gray-800 border-gray-700 hover:bg-blue-600 rounded-full"
          >
            <td class="p-3">
              <div class="flex items-center gap-x-2">
                <img
                  :src="require(`@/assets/img/${itm.icon}.png`)"
                  alt=""
                  class="h-7 w-7"
                >
                <div>
                  <p>{{ itm.name }}</p>
                  <p class="text-gray-400">
                    {{ itm.name }}
                  </p>
                </div>
              </div>
            </td>
            <td class="p-3">
              <p>{{ itm.price }}</p>
              <p class="text-gray-400">
                {{ itm.price }}
              </p>
            </td>
            <td class="p-3">
              <p>{{ itm.balance }}</p>
            </td>
            <td class="p-3">
              <div>
                <span>
                  <div>
                    <span id="ProgressLabel" class="sr-only">Loading</span>

                    <span
                      role="progressbar"
                      aria-labelledby="ProgressLabel"
                      :aria-valuenow="itm.proportion"
                      class="block rounded-full bg-gray-200"
                    >
                      <span
                        class="block h-3 rounded-full bg-indigo-600"
                        :style="{ width: `${itm.proportion}%` }"
                      />
                    </span>
                  </div>
                </span>
                <!-- <span class="">{{ itm.proportion }}</span> -->
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['assetsList']
}
</script>
