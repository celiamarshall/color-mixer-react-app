import { ADD_COLOR, SELECT_COLOR } from '../actions/colors'


const initialState = [
  { value: '#ff0000', name: 'Red', selected: false },
  { value: '#00ff00', name: 'Green', selected: false },
  { value: '#0000ff', name: 'Blue', selected: false }
]

function colors(state = initialState, action) {
  switch(action.type) {
    case ADD_COLOR:
      return [...state, action.payload]

    case SELECT_COLOR:
      const newState = [...state]
      newState[action.payload].selected  = !newState[action.payload].selected
      return newState

    default:
      return state
  }
}

export default colors 