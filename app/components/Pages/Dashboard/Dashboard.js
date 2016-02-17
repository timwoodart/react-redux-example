import React, {Component} from 'react';
import {ProfileForm} from '../../../components';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <ProfileForm
          formHeading="Let's start off by adding a little about yourself"
        />
      </div>
    );
  }
}
