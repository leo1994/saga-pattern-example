import BaseError from './BaseError'

export default class ValidationError extends BaseError {
  constructor (message: Record<string, string>) {
    const jsonMessage = JSON.stringify(message)
    super('ValidationError', jsonMessage, true)
  }
}
