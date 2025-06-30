import * as ValueType from '../ValueType/ValueType.ts'

export const getType = (value: unknown): number => {
  switch (typeof value) {
    case 'number':
      return ValueType.Number
    case 'function':
      return ValueType.Function
    case 'string':
      return ValueType.String
    case 'object':
      if (value === null) {
        return ValueType.Null
      }
      if (Array.isArray(value)) {
        return ValueType.Array
      }
      return ValueType.Object
    case 'boolean':
      return ValueType.Boolean
    default:
      return ValueType.Unknown
  }
}
