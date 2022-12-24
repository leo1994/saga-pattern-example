import { App } from '@marketplace/server'
import Logger from '@marketplace/logger'

App.get('/', (req, res) => {
  Logger.info('Hello World')
  res.send('Hello World')
})

export default App
