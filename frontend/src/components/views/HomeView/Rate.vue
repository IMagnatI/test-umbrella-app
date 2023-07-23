<template>
  <td
    class="c-rate"
    :title="`row: ${rate.sourceCountry} col: ${rate.destinationCountry}`"
  >
    <input
      v-if="rate"
      :aria-label="`row: ${rate.sourceCountry} col: ${rate.destinationCountry}`"
      type="number"
      v-model="rateValue"
      @input="changeValue"
      @click="setActive"
      class="c-rate__input"
    />
    <p v-else>'-'</p>
  </td>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'
import { IRate } from '@/types/RateTypes'
import { Nullable } from '@/types/Nullable'
import { rateService } from '@/main'

@Component({
  components: {},
})
export default class Rate extends Vue {
  public rateValue: number | string = 0

  @Prop({ type: Object, required: true })
  public rate!: Nullable<IRate>

  public mounted(): void {
    if (this.rate) {
      this.rateValue = this.rate.rate
    }
  }

  public setActive(): void {
    if (this.rate) {
      rateService.setActiveRate(this.rate)
    }
  }

  public changeValue(): void {
    if (this.rate) {
      rateService.saveRate({
        ...this.rate,
        rate: this.rateValue,
      })
    }
  }
}
</script>
