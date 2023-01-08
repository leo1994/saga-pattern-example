import App, { Request, Response } from '@marketplace/server'
import Logger from '@marketplace/logger'

App.get('/', (req: Request, res: Response) => {
  Logger.info('Hello World')
  res.send('Hello World')
})

export default App
