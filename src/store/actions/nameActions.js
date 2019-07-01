import { UPDATE_NAME } from '../actionTypes';

const UpdateName = (dispatch, name) =>
{
  dispatch({
    type: UPDATE_NAME,
    payload: name
  });
};

export default {
  UpdateName
};