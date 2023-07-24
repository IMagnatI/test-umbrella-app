import { Store, Pinia } from 'pinia-class-component'
import RatesRepository from '@/repositories/RatesRepository'
import { IRate, IRateResponse, IRateStore } from '@/types/RateTypes'
import { Nullable } from '@/types/Nullable'

@Store
export default class RateService extends Pinia {
  public store: IRateStore = {
    allRates: [],
    rate: null,
    isError: false,
    isLoading: false,
    sourceCountries: [],
    selectedSourceCountry: null,
    selectedDestinationCountry: null,
  }

  public get allRates(): IRateResponse[] {
    return this.store.allRates
  }

  public get rate(): Nullable<IRate> {
    return this.store.rate
  }

  public get isError(): boolean {
    return this.store.isError
  }

  public get isLoading(): boolean {
    return this.store.isLoading
  }

  public get sourceCountries(): string[] {
    return this.store.sourceCountries
  }

  public get selectedSourceCountry(): Nullable<string> {
    return this.store.selectedSourceCountry
  }

  public get selectedDestinationCountry(): Nullable<string> {
    return this.store.selectedDestinationCountry
  }

  public async loadData() {
    await RatesRepository.getAllDatesForRates().then((response) => {
      this.store.allRates = response.rates
      this.store.sourceCountries = response.sourceCountries
    })
  }

  public setActiveRate(rate: IRate) {
    this.store.rate = rate
  }

  public async saveRate(rate: IRate) {
    await RatesRepository.saveRate(rate).then((response) => {
      if (response?.error === false) {
        this.loadData()
      } else {
        this.isError = true
        throw response.errorMsg
      }
    })
  }

  public setChangeSourceCountry(country: string) {
    this.store.selectedSourceCountry = country
  }

  public setChangeDestinationCountry(country: string) {
    this.store.selectedDestinationCountry = country
  }
}
