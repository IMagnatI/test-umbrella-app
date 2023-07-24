<template>
  <div class="c-homeTable">
    <div class="flex min-w-[1845px]">
      <div class="flex items-center">
        <p class="origin-left-top block -rotate-90 transform">Kraj źródłowy</p>
      </div>
      <div class="sticky left-0 flex">
        <div class="flex flex-col bg-white">
          <div class="mt-[24px] h-[49px] w-[49px] border"></div>
          <div
            class="h-[49px] w-[49px] border-b border-l border-r"
            :class="{
              'bg-gray-100': isActiveRow(country),
            }"
            v-for="(country, index) in sourceCountries"
            :key="`row_${country}_${index}`"
            :id="`row_${country}_${index}`"
            v-show="selectedRow === country || !selectedRow"
          >
            <p
              class="flex h-[49px] items-center justify-center text-center font-bold"
            >
              {{ country }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <p
          class="text-center"
          :class="{
            absolute: !!selectedColumn,
          }"
        >
          Kraj docelowy
        </p>
        <div
          class="sticky top-0 flex h-[49px] flex-row border-b border-t bg-white"
          :class="{
            'mt-6': !!selectedColumn,
          }"
        >
          <div
            class="h-[49px] w-[49px] border-r"
            :class="{
              'bg-gray-100': isActiveColumn(country),
            }"
            v-for="(country, index) in sourceCountries"
            :key="`col_${country}_${index}`"
            :id="`col_${country}_${index}`"
            v-show="selectedColumn === country || !selectedColumn"
          >
            <p
              class="flex h-[49px] items-center justify-center text-center font-bold"
            >
              {{ country }}
            </p>
          </div>
        </div>
        <div
          class="flex flex-row border-b"
          v-for="(country, index) in sourceCountries"
          :key="`row3_${country}_${index}`"
          v-show="selectedRow === country || !selectedRow"
        >
          <Rate
            v-for="(destinationCountry, index) in sourceCountries"
            :key="`rowData_${country}_${sourceCountries[index]}`"
            :class="{ elementToTests: index === 2 }"
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
        </div>
      </div>
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
