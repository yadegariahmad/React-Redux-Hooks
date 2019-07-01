import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import counterActions from '../store/actions/counterActions';

const Counter = () =>
{
  const { count, name } = useSelector(state => ({
    ...state.counter,
    ...state.name
  }));
  const dispatch = useDispatch();

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={() => { counterActions.Increment(dispatch) }}>+</button>
      <button onClick={() => { counterActions.Decrement(dispatch) }}>-</button>
      <div>
        <h3>Your name is: {name}</h3>
      </div>
    </>
  );
}

export default Counter;
