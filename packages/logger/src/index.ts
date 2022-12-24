import { createLogger, format, transports } from 'winston'
import { TransformableInfo } from 'logform'

import asyncLocalStorage from '@marketplace/store'

const customFormartToFile = (info: TransformableInfo): string => {
  const transactionalId = asyncLocalStorage.getStore()?.get('requestId') ?? 'unknown'
  return JSON.stringify({
    timestamp: info.timestamp,
    transactionalId,
    level: info.level,
    message: info.message
  })
}

const customFormart = (info: TransformableInfo): string => {
  const transactionalId = asyncLocalStorage.getStore()?.get('requestId') ?? 'unknown'
  const { level, message, ...rest } = info
  return ` ${level}: ${message} ${JSON.stringify({ transactionalId, ...rest })} `
}

const Logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.printf(customFormartToFile)
  ),
  defaultMeta: { service: process.env.SERVICE_NAME ?? 'unknown' },
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
})

if (process.env.NODE_ENV !== 'production') {
  Logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.printf(customFormart)
    )
  }))
}

export default Logger
