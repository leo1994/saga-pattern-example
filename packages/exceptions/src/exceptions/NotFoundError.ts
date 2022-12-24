import BaseError from './BaseError'

export default class NotFoundError extends BaseError {
  constructor (description: string) {
    super('NotFoundError', description, true)
  }
}
