import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
  request: null, //fact || mathFact || prime || everything || nothing
  chosenNumber: null,
  output: null,
  currentUserName: null,
  usersNames: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CHOSEN_NUMBER:
      return {
        ...state,
        chosenNumber: action.chosenNumber
      };

    case actionTypes.SET_REQUEST:
      return {
        ...state,
        request: action.request
      };

    case actionTypes.SET_OUTPUT:
      return {
        ...state,
        output: action.output
      };

    case actionTypes.SET_CURRENT_USER_NAME:
      return {
        ...state,
        currentUserName: action.name
      };

    case actionTypes.SET_USERS_NAMES:
      return {
        ...state,
        usersNames: action.usersNames
      };

    default:
      return state;
  }
};
