<template>
  <div
    class="c-rate h-[48px] w-[49px] overflow-hidden border-r"
    :class="{
      'bg-gray-100': isActive,
      'border border-red-500': isError || !valid,
    }"
    :title="`row: ${rate.sourceCountry} col: ${rate.destinationCountry}`"
  >
    <input
      v-if="rate"
      :aria-label="`row: ${rate.sourceCountry} col: ${rate.destinationCountry}`"
      type="number"
      v-model="rateValue"
      @input="changeValue"
      @click="setActive"
      class="h-full w-full border-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      :class="{
        'bg-gray-100': isActive,
      }"
      min="0"
      max="100"
      step="0.1"
    />
    <p v-else>'-'</p>
  </div>
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
  @Prop({ type: Object, required: true })
  public rate!: Nullable<IRate>

  public rateValue: number | string = 0
  public isError: boolean = false

  public get activeRate(): Nullable<IRate> {
    return rateService.rate
  }

  public get isActive(): boolean {
    if (!this.rate || !this.activeRate) return false
    return this.rate && this.activeRate && this.rate.id === this.activeRate.id
  }

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

  public get valid(): boolean {
    return this.rateValue >= 0 && this.rateValue <= 100
  }

  public async changeValue(): Promise<void> {
    this.isError = false
    if (this.rate) {
      await rateService
        .saveRate({
          ...this.rate,
          rate: this.rateValue,
        })
        .catch(() => {
          this.isError = true
        })
    }
  }
}
</script>
