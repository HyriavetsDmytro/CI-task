import * as React from 'react'
import { Country } from '../../store/types.ts'

import { Chip } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CountryChip: React.FC<{ country: Country }> = ({ country }) => {
  const navigate = useNavigate()

  return (
    <Chip
      label={country.name}
      onClick={() => navigate(`/country/${country.countryCode}`)}
    />
  )
}
export default CountryChip
