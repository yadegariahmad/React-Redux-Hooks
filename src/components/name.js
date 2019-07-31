import React from 'react';
import { connect } from 'react-redux';
import nameActions from '../store/actions/nameActions';

const Name = ({ updateName }) =>
{
  return (
    <div>
      <input placeholder="Input your name" onChange={(e) => { updateName(e.target.value) }} />
    </div>
  );
}

const mapDispatchToProps = dispatch =>
  ({
    updateName: (name) =>
    {
      dispatch(nameActions.UpdateName(name));
    },
  });


export default connect(null, mapDispatchToProps)(Name);
