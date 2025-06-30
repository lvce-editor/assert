import { AssertionError } from '../AssertionError/AssertionError.ts'
import * as GetType from '../GetType/GetType.ts'
import * as ValueType from '../ValueType/ValueType.ts'

export const object = (value: unknown) => {
  const type = GetType.getType(value)
  if (type !== ValueType.Object) {
    throw new AssertionError('expected value to be of type object')
  }
}

export const number = (value: unknown) => {
  const type = GetType.getType(value)
  if (type !== ValueType.Number) {
    throw new AssertionError('expected value to be of type number')
  }
}

export const array = (value: unknown) => {
  const type = GetType.getType(value)
  if (type !== ValueType.Array) {
    throw new AssertionError('expected value to be of type array')
  }
}

export const string = (value: unknown) => {
  const type = GetType.getType(value)
  if (type !== ValueType.String) {
    throw new AssertionError('expected value to be of type string')
  }
}

export const boolean = (value: unknown) => {
  const type = GetType.getType(value)
  if (type !== ValueType.Boolean) {
    throw new AssertionError('expected value to be of type boolean')
  }
}

export const fn = (value: unknown) => {
  const type = GetType.getType(value)
  if (type !== ValueType.Function) {
    throw new AssertionError('expected value to be of type function')
  }
}
