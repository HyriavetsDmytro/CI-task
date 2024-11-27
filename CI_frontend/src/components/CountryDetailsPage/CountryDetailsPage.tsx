import styles from './CountryDetailsPage.module.scss'
import { useParams } from 'react-router-dom'
import { useGetCountryDataQuery } from '../../store/apiSlice.tsx'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CountryChip from '../../scenes/MainPage/CountryChip.tsx'
import { LineChart } from '@mui/x-charts'

export default function CountryDetailsPage() {
  const { countryCode } = useParams()
  const { data } = useGetCountryDataQuery(countryCode || '', {
    skip: !countryCode,
  })

  if (data)
    return (
      <Box className={styles.mainBox}>
        <Box className={styles.title}>
          <Typography variant="h2" component="h2">
            {data.countryName}
          </Typography>
          <Box
            component="img"
            className={styles.img}
            alt="country Name"
            src={data.countryFlag}
          />
        </Box>
        <Box className={styles.mainContent}>
          <Box className={styles.borderCountries}>
            {data.borderCountries?.map((borderCountry) => (
              <CountryChip
                key={borderCountry.countryCode}
                country={{
                  name: borderCountry.officialName,
                  countryCode: borderCountry.countryCode,
                }}
              />
            ))}
          </Box>
          <Box className={styles.chart}>
            <LineChart
              xAxis={[
                { data: data.countryPopulation.map((country) => country.year) },
              ]}
              series={[
                {
                  data: data.countryPopulation.map((country) => country.value),
                },
              ]}
              height={400}
            />
          </Box>
        </Box>
      </Box>
    )
}
