import React from 'react';
import { useDispatch } from 'react-redux';
import nameActions from '../store/actions/nameActions';

const Name = () =>
{
  const dispatch = useDispatch();

  return (
    <div>
      <input placeholder="Input your name" onChange={(e) => { nameActions.UpdateName(dispatch, e.target.value) }} />
    </div>
  );
}

export default Name;
