import { AssertionError } from '../AssertionError/AssertionError.js'
import * as GetType from '../GetType/GetType.js'

export const object = (value) => {
  const type = GetType.getType(value)
  if (type !== 'object') {
    throw new AssertionError('expected value to be of type object')
  }
}

export const number = (value) => {
  const type = GetType.getType(value)
  if (type !== 'number') {
    throw new AssertionError('expected value to be of type number')
  }
}

export const array = (value) => {
  const type = GetType.getType(value)
  if (type !== 'array') {
    throw new AssertionError('expected value to be of type array')
  }
}

export const string = (value) => {
  const type = GetType.getType(value)
  if (type !== 'string') {
    throw new AssertionError('expected value to be of type string')
  }
}

export const boolean = (value) => {
  const type = GetType.getType(value)
  if (type !== 'boolean') {
    throw new AssertionError('expected value to be of type boolean')
  }
}

export const fn = (value) => {
  const type = GetType.getType(value)
  if (type !== 'function') {
    throw new AssertionError('expected value to be of type function')
  }
}
