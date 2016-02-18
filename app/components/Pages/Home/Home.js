import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from '../../../utils/history';

export default class Home extends Component {

  _onBtnClick() {
    history.push('/profile');
  }

  render() {
    return (
      <div className='hero-container'>
        <div className='hero'>
          <h1>Lets get started on your new profile</h1>
            <Button
              bsSize="large"
              bsStyle='primary'
              onClick={this._onBtnClick}>
                Get Started
            </Button>
        </div>
      </div>
    );
  }
}
