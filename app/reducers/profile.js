import objectAssign from 'object-assign';
import { UPDATE_PROFILE } from '../constants/ActionTypes';

export default function profile(state = {}, action) {

  switch (action.type) {
    case UPDATE_PROFILE:
      return objectAssign({}, state, {
        'userFirstName': action.userFirstName,
        'userLastName': action.userLastName,
        'userTitle': action.userTitle,
        'userCity': action.userCity
      });
    default:
      return state;
  }
}