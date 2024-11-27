import { Request, Response } from 'express'
import { CountryService } from '../services/Country.service'

export const getCountriesList = async (req: Request, res: Response) => {
  try {
    const result = await CountryService.getCountriesList()
    return res.json(result)
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'error getting countries list.' })
  }
}

export const getCountryInfoByCode = async (req: Request, res: Response) => {
  const { countryCode } = req.params
  try {
    const result = await CountryService.getCountryInfoByCode(countryCode)
    return res.json(result)
  } catch (err) {
    console.log(err)
    return res
      .status(400)
      .json({ message: `error getting country's information.` })
  }
}
