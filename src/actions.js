import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED
} from "./constants"

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const getMonsters = (dispatch) => {
  dispatch({ type: REQUEST_MONSTERS_PENDING})
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: REQUEST_MONSTERS_SUCCESS, payload: data})
    })
    .catch((err) => {
      dispatch({ type: REQUEST_MONSTERS_FAILED, payload: err})
    })
}
