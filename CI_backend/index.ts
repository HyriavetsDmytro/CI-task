import * as express from 'express'
import Controller from './src/utils/App.util'
//import 'dotenv/config'
import { SERVER_PORT } from './config'

class App {
  public app: express.Application

  constructor(controllers: Controller[]) {
    this.app = express.default()
    this.initializeControllers(controllers)
  }

  public listen() {
    this.app.listen(SERVER_PORT, () => {
      console.log(`App listening on the port ${SERVER_PORT}`)
    })
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router)
    })
  }
}

export default App
