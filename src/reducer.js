import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED
} from "./constants"

const initialStateSearch = {
  searchField: ""
}

export const searchMonsters = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
}

const initialStateMonsters = {
  monsters: []
}

export const getMonsters = (state = initialStateMonsters, action = {}) => {
  switch (action.type) {
    case REQUEST_MONSTERS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_MONSTERS_SUCCESS:
      return { ...state, monsters: action.payload, isPending: false };
    case REQUEST_MONSTERS_FAILED:
      return { ...state,  error: action.payload, isPending: false };
    default:
      return state;
  }
}
