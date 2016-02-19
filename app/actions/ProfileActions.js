import { UPDATE_PROFILE } from '../constants/ActionTypes';

export function updateProfile(profile) {
  return {
    type: UPDATE_PROFILE,
    userFirstName: profile.userFirstName,
    userLastName: profile.userLastName,
    userTitle: profile.userTitle,
    userCity: profile.userCity
  };
}