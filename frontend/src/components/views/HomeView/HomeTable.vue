<template>
  <div class="c-homeTable">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead
          class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th></th>
            <th
              scope="col"
              class="px-2 py-3 text-center"
              :class="{
                'bg-gray-100': isActiveColumn(country),
              }"
              v-for="(country, index) in sourceCountries"
              :key="`col_${country}_${index}`"
              v-show="selectedColumn === country || selectedColumn === null"
            >
              {{ country }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            scope="row"
            class=""
            v-for="(country, index) in sourceCountries"
            :key="`row_${country}_${index}`"
          >
            <th
              class="px-2 py-3 text-center text-xs uppercase text-gray-700"
              :class="{
                'bg-gray-100': isActiveRow(country),
                'bg-gray-50 dark:bg-gray-700 dark:text-gray-400':
                  !isActiveRow(country),
              }"
              v-show="selectedRow === country || !selectedRow"
            >
              {{ country }}
            </th>

            <Rate
              v-for="(destinationCountry, index) in sourceCountries"
              :key="`rowData_${country}_${sourceCountries[index]}`"
              v-show="
                (selectedColumn === destinationCountry || !selectedColumn) &&
                (selectedRow === country || !selectedRow)
              "
              :rate="
                rateForDestinationCountry(
                  ratesForSourceCountry(country),
                  destinationCountry
                )
              "
            >
            </Rate>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import { rateService } from '@/main'
import { IRate } from '@/types/RateTypes'
import { Nullable } from '@/types/Nullable'
import Rate from '@/components/views/HomeView/Rate.vue'

@Component({
  components: {
    Rate,
  },
})
export default class HomeTable extends Vue {
  public get sourceCountries(): string[] {
    return rateService.sourceCountries
  }

  public get selectedColumn(): Nullable<string> {
    return rateService.selectedSourceCountry
  }

  public get selectedRow(): Nullable<string> {
    return rateService.selectedDestinationCountry
  }

  public isActiveRow(name): boolean {
    return rateService.rate?.sourceCountry === name
  }

  public isActiveColumn(name): boolean {
    return rateService.rate?.destinationCountry === name
  }

  public ratesForSourceCountry(name: string): IRate[] {
    return (
      rateService.allRates.find((rate) => rate.sourceCountry === name)
        .destinationCountries || []
    )
  }

  public rateForDestinationCountry(
    rates: IRate[],
    name: string
  ): Nullable<IRate> {
    return rates.find((rate) => rate.destinationCountry === name) ?? null
  }
}
</script>
