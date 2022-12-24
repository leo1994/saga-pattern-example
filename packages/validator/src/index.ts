import { ObjectSchema, ValidationErrorItem } from 'joi'

export default (payload: any, schema: ObjectSchema): Record<string, string> | false => {
  const { error } = schema.validate(payload, { abortEarly: false, convert: false })
  if (error != null) {
    return error.details.reduce(
      (prev, errorItem: ValidationErrorItem) => ({
        ...prev,
        [errorItem.path.join('.')]: errorItem.message.replace(/"/g, '')
      }), {}
    )
  }
  return false
}
