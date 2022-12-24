import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import { randomUUID } from 'crypto'

import asyncLocalStorage from '@marketplace/store'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(cors())

app.get('/health', (req, res) => {
  res.status(200).send('OK')
})

app.use((req, res, next) => {
  const id = req.get('X-Request-Id') ?? randomUUID()
  const store = new Map()
  store.set('requestId', id)

  res.set('X-Request-Id', id)
  asyncLocalStorage.run(store, () => {
    next()
  })
})

export default app
