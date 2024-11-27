import 'dotenv/config'
import App from './index'
import CountryController from './src/routes/Country.route'

const app = new App([new CountryController()])

app.listen()
