import Box from '@mui/material/Box'
import CountryChip from './CountryChip.tsx'
import styles from './MainPage.module.scss'
import { useGetCountriesQuery } from '../../store/apiSlice.tsx'

function MainPage() {
  const { data: countryList } = useGetCountriesQuery()

  return (
    <Box className={styles.mainBox}>
      {countryList &&
        countryList.length !== 0 &&
        countryList.map((item) => (
          <CountryChip key={item.countryCode} country={item} />
        ))}
    </Box>
  )
}

export default MainPage
