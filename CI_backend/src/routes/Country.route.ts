import { Router } from 'express'
import {
  getCountriesList,
  getCountryInfoByCode,
} from '../controllers/Country.controller'

class CountryController {
  public path = '/api/'
  public router = Router()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}countries`, getCountriesList)
    this.router.get(`${this.path}country/:countryCode`, getCountryInfoByCode)
  }
}

export default CountryController
