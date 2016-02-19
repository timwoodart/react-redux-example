import React, {PropTypes} from 'react';
import { Image } from 'react-bootstrap';
import profilePic from '../../../public/images/lolly-driver-1940s-Britian.jpg';

export default class ProfileDisplay extends React.Component {


  render() {
    const {
        userFirstName,
        userLastName,
        userTitle,
        userCity } = this.props.userDetails;

    return (
      <div className="profile-display">
        <Image src={profilePic} rounded className="profilePicWrapper" />
        <div className="profileInfoWrapper">
          <p>{userFirstName}</p>
          <p>{userLastName}</p>
          <p>{userTitle}</p>
          <p>{userCity}</p>
        </div>
      </div>
    );
  }
}

ProfileDisplay.PropTypes = {
  userDetails: PropTypes.obj
}