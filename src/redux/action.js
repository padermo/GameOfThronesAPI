export const GET_USERS = 'GET_USERS'

export function getUsers() {
  return function (dispatch) {
    fetch("https://thronesapi.com/api/v2/characters")
      .then(response => response.json())
      .then(data => dispatch({ type: GET_USERS, payload: data }))
  }
}