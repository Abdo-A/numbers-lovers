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

//API requests actions:

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
      });
  };
};
