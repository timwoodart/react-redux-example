import React from 'react';
import { Button } from 'react-bootstrap';
import history from '../../utils/history'
export default class Hero extends React.Component {

  onBtnClick() {
    history.push('/dashboard');
  }

  render() {
    return (
      <div className='hero-container'>
        <div className='hero'>
          <h1>Lets get started on your new profile</h1>
            <Button
              bsSize="large"
              bsStyle='primary'
              onClick={this.onBtnClick}>
                Get Started
            </Button>
        </div>
      </div>
    );
  }
}