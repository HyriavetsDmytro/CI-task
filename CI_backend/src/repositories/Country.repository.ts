import {
  Country,
  CountryImageData,
  CountryInfo,
  CountryPopulation,
} from '../utils/Country.util'

export class CountryRepository {
  static getCountriesList = async (): Promise<Country[]> => {
    return (
      await fetch('https://date.nager.at/api/v3/AvailableCountries')
    ).json()
  }
  static getCountryInfo = async (countryCode: string): Promise<CountryInfo> => {
    return (
      await fetch(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`)
    ).json()
  }
  static getCountryPopulation = async (
    countryName: string,
  ): Promise<CountryPopulation> => {
    return (
      await (
        await fetch(
          'https://countriesnow.space/api/v0.1/countries/population',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ country: countryName }),
          },
        )
      ).json()
    ).data
  }
  static getCountryDataImage = async (
    countryName: string,
  ): Promise<CountryImageData> => {
    return (
      await (
        await fetch(
          'https://countriesnow.space/api/v0.1/countries/flag/images',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ country: countryName }),
          },
        )
      ).json()
    ).data
  }
}
