import App from '@infrastructure/http'
import Logger from '@marketplace/logger'

process.env.SERVICE_NAME = 'stores'

const port = process.env.PORT ?? 3000

App.listen(port, () => {
  Logger.info(`Server is running on port ${port}`)
})
