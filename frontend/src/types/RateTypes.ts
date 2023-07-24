import { Nullable } from '@/types/Nullable'

export interface IRate {
  id: number
  sourceCountry: string
  destinationCountry: string
  rate: number | string
  error?: boolean
  errorMsg?: string
}

export interface IRateStore {
  allRates: IRateResponse[]
  rate: Nullable<IRate>
  isError: boolean
  isLoading: boolean
  sourceCountries: string[]
  selectedSourceCountry: Nullable<string>
  selectedDestinationCountry: Nullable<string>
}

export interface IRateResponse {
  sourceCountry: string
  destinationCountries: IRate[]
}

export interface IAllDataRatesResponse {
  sourceCountries: string[]
  rates: IRateResponse[]
}
