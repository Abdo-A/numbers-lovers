import axios from "axios";

import * as actionTypes from "./actionTypes";

export const setChosenNumber = num => {
  return {
    type: actionTypes.SET_CHOSEN_NUMBER,
    chosenNumber: num
  };
};

export const setRequest = request => {
  return {
    type: actionTypes.SET_REQUEST,
    request: request
  };
};

export const setOutput = output => {
  return {
    type: actionTypes.SET_OUTPUT,
    output: output
  };
};

export const setCurrentUserName = name => {
  return {
    type: actionTypes.SET_CURRENT_USER_NAME,
    name: name
  };
};

const setUsersNames = usersNames => {
  return {
    type: actionTypes.SET_USERS_NAMES,
    usersNames: usersNames
  };
};

//API requests actions:

export const postCurrentUserName = name => {
  const url = "https://numbers-lovers.firebaseio.com/" + "users.json";

  return dispatch => {
    axios
      .post(url, { name: name })
      .then(res => {
        console.log("Posting user success");
      })
      .catch(error => {
        console.log("error", error);
      });
  };
};

export const getUsersNames = name => {
  const url = "https://numbers-lovers.firebaseio.com/" + "users.json";

  return dispatch => {
    dispatch(setUsersNames(null));

    axios
      .get(url)
      .then(res => {
        let usersNames = [];
        console.log("Getting users success");
        //console.log(res.data);

        for (let key in res.data) {
          usersNames.unshift(res.data[key].name);
        }

        dispatch(setUsersNames(usersNames));
      })
      .catch(error => {
        console.log("error", error);
        dispatch(setOutput(["Please check your internet connection"]));
      });
  };
};

export const requestFact = number => {
  const url = "http://numbersapi.com/" + number;

  return dispatch => {
    dispatch(setOutput(null));
    axios
      .get(url)
      .then(res => {
        dispatch(setOutput(res.data));
      })
      .catch(error => {
        console.log("error", error);
        dispatch(setOutput("Please check your internet connection"));
      });
  };
};

export const requestMathFact = number => {
  const url = "http://numbersapi.com/" + number + "/math";

  return dispatch => {
    dispatch(setOutput(null));

    axios
      .get(url)
      .then(res => {
        dispatch(setOutput(res.data));
      })
      .catch(error => {
        console.log("error", error);
        dispatch(setOutput("Please check your internet connection"));
      });
  };
};
