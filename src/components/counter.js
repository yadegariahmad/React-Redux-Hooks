import React from 'react';
import { connect, useSelector } from 'react-redux';
import counterActions from '../store/actions/counterActions';

const Counter = ({ increment, decrement }) =>
{
  const { count, name } = useSelector(state => ({
    ...state.counter,
    ...state.name
  }));

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

const mapDispatchToProps = dispatch => ({
  increment: () =>
  {
    dispatch(counterActions.Increment());
  },
  decrement: () =>
  {
    dispatch(counterActions.Decrement());
  },
});


export default connect(null, mapDispatchToProps)(Counter);
