import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Country, CountryData } from './types.ts'

export const ciApi = createApi({
  reducerPath: 'ciApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      query: () => ({
        url: `/countries`,
        method: 'GET',
      }),
    }),
    getCountryData: builder.query<CountryData, string>({
      query: (countryCode) => ({
        url: `/country/${countryCode}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetCountriesQuery, useGetCountryDataQuery } = ciApi
