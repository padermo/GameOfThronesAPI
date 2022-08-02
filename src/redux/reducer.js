import { GET_USERS } from "./action.js"

const initialState = {
  personajes: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        personajes: action.payload
      }
    default:
      return state
  }
}