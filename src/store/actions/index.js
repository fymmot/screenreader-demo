import * as actionTypes from './actionTypes'

export const setStep = (step) => {
  return{
    type: actionTypes.SET_STEP,
    step: step
  }
};

export const setErrors = (errors) => {
  return{
    type: actionTypes.SET_ERRORS,
    errors: errors
  }
}
