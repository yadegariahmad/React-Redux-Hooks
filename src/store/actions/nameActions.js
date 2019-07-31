import { UPDATE_NAME } from '../actionTypes';

const UpdateName = (name) =>
{
  return {
    type: UPDATE_NAME,
    payload: name
  };
};

export default {
  UpdateName
};