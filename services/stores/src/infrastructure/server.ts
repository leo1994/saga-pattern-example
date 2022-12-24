import App from '@infrastructure/http'
import Logger from '@marketplace/logger'

const port = process.env.PORT ?? 3000

App.listen(port, () => {
  Logger.info(`Server is running on port ${port}`)
})
