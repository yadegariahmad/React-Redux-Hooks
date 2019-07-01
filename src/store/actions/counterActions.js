import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actionTypes';

const Increment = (dispatch) =>
{
  dispatch({
    type: INCREMENT_COUNT
  });
};

const Decrement = (dispatch) =>
{
  dispatch({
    type: DECREMENT_COUNT
  });
};

export default {
  Increment,
  Decrement
};