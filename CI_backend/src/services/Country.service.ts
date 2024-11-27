import { buildCountryData, Country } from '../utils/Country.util'
import { CountryRepository } from '../repositories/Country.repository'

export class CountryService {
  static getCountriesList = async (): Promise<Country[]> => {
    return await CountryRepository.getCountriesList()
  }
  static getCountryInfoByCode = async (countryCode: string) => {
    const countryInfo = await CountryRepository.getCountryInfo(countryCode)

    const [countryPopulation, countryImageData] = await Promise.all([
      CountryRepository.getCountryPopulation(countryInfo.officialName),
      CountryRepository.getCountryDataImage(countryInfo.officialName),
    ])

    return buildCountryData(countryInfo, countryPopulation, countryImageData)
  }
}
