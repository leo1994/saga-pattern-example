
export default abstract class BaseError extends Error {
  public isOperational: boolean

  constructor (name: string, description: string, isOperational: boolean) {
    super(description)

    Object.setPrototypeOf(this, new.target.prototype)
    this.name = name
    this.isOperational = isOperational
    Error.captureStackTrace(this)
  }
}

module.exports = BaseError
