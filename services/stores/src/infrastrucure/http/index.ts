import { App } from '@marketplace/server'
import Logger from '@marketplace/logger'

const port = process.env.PORT ?? 3000

App.get('/', (req, res) => {
  Logger.info('Hello World')
  res.send('Hello World')
})

App.listen(port, () => {
  Logger.info(`Server is running on port ${port}`)
})
