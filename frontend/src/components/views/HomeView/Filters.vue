<template>
  <div class="c-filters">
    <div>
      <label
        for="countries"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Kraj źródłowy</label
      >
      <select
        id="sourceCountry"
        v-model="sourceCountry"
        @change="changeSourceCountry"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option selected :value="null">Choose a country</option>
        <option
          v-for="(country, index) in countries"
          :value="country"
          :key="`${country}_${index}_source`"
        >
          {{ country }}
        </option>
      </select>
    </div>
    <div>
      <label
        for="countries"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Kraj docelowy</label
      >
      <select
        id="destinationCountry"
        v-model="destinationCountry"
        @change="changeDestinationCountry"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option selected :value="null">Choose a country</option>
        <option
          v-for="(country, index) in countries"
          :value="country"
          :key="`${country}_${index}_destination`"
        >
          {{ country }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import { rateService } from '@/main'

@Component({
  components: {},
})
export default class Filters extends Vue {
  public sourceCountry: string = ''
  public destinationCountry: string = ''
  public get countries(): string[] {
    return rateService.sourceCountries
  }

  public changeSourceCountry(): void {
    rateService.setChangeSourceCountry(this.sourceCountry)
  }

  public changeDestinationCountry(): void {
    rateService.setChangeDestinationCountry(this.destinationCountry)
  }
}
</script>
