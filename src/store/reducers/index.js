import * as actionTypes from '../actions/actionTypes'

const initialState = {
  errors: {},
  step: 0
};
const items = (state = initialState, action) => {

  console.log(action);

  switch (action.type) {
    case actionTypes.SET_STEP: {
      return {
        ...state,
        step: action.step
      }
    }

    case actionTypes.SET_ERRORS: {
      return {
        ...state,
        errors: action.errors
      }
    }


    default:
      return state
  }
}

export default items;