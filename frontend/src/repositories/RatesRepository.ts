import axios from 'axios'
import UrlHelper from '@/helpers/urls'
import { IAllDataRatesResponse, IRate } from '@/types/RateTypes'
import { Nullable } from '@/types/Nullable'

class RatesRepository {
  public async getAllDatesForRates(): Promise<IAllDataRatesResponse> {
    return await axios
      .get(UrlHelper.getFullApiUrl(`api/load`))
      .then((response) => {
        return response.data ?? []
      })
      .catch((error) => {
        throw error
      })
  }

  public async saveRate(rate: IRate): Promise<Nullable<IRate>> {
    return await axios
      .patch(UrlHelper.getFullApiUrl(`api/${rate.id}/update/json`), rate)
      .then((response) => {
        return response.data ?? null
      })
      .catch((error) => {
        throw error
      })
  }
}

export default new RatesRepository()
