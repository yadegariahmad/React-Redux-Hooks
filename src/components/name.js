import React from 'react';
import { useDispatch } from 'react-redux';
import nameActions from '../store/actions/nameActions';

const Name = () =>
{
  const dispatch = useDispatch();
  const updateName = (name) => dispatch(nameActions.UpdateName(name))

  return (
    <div>
      <input placeholder="Input your name" onChange={(e) => { updateName(e.target.value) }} />
    </div>
  );
}

export default Name;
