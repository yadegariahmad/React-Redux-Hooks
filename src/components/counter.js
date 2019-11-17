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
  const increment = () => dispatch(counterActions.Increment())
  const decrement = () => dispatch(counterActions.Decrement())

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={() => { increment() }}>+</button>
      <button onClick={() => { decrement() }}>-</button>
      <div>
        <h3>Your name is: {name}</h3>
      </div>
    </>
  );
}

export default Counter;
