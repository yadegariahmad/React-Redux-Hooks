import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actionTypes';

const counterReducer = (state = { count: 0 }, action) =>
{
  switch (action.type)
  {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

export default counterReducer;