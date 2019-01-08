export const ADD_COLOR = 'ADD_COLOR'
export const SELECT_COLOR = 'SELECT_COLOR'

export function addColor(newColor) {
  return {
    type: ADD_COLOR,
    payload: newColor
  }
}

export function selectColor(index) {
  return {
    type: SELECT_COLOR,
    payload: index
  }
}
