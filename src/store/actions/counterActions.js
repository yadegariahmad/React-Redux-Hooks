import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actionTypes';

const Increment = () =>
{
  return {
    type: INCREMENT_COUNT
  };
};

const Decrement = () =>
{
  return {
    type: DECREMENT_COUNT
  };
};

export default {
  Increment,
  Decrement
};