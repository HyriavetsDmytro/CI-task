export type CountryInfo = {
  commonName: string
  officialName: string
  countryCode: string
  region: string
  borders: CountryInfo[] | null
}
export type PopulationCount = {
  year: number
  value: number
}

export type Country = {
  countryCode: string
  name: string
}
export type CountryData = {
  countryName: string
  borderCountries: CountryInfo[] | null
  countryPopulation: PopulationCount[]
  countryFlag: string
}
