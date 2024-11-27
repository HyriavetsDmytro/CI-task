export const buildCountryData = (
  countryInfo: CountryInfo,
  countryPopulation: CountryPopulation,
  countryImageData: CountryImageData,
): CountryData => {
  return {
    countryName: countryInfo.officialName,
    borderCountries: countryInfo.borders,
    countryPopulation: countryPopulation?.populationCounts || [],
    countryFlag: countryImageData?.flag || '',
  }
}

export type CountryInfo = {
  commonName: string
  officialName: string
  countryCode: string
  region: string
  borders: CountryInfo[] | null
}
export type CountryPopulation = {
  country: string
  code: string
  iso3: string
  populationCounts: PopulationCount[]
}
export type PopulationCount = {
  year: number
  value: number
}

export type CountryImageData = {
  name: string
  flag: string
  iso2: string
  iso3: string
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
