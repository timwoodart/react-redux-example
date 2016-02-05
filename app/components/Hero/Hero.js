import React from 'react';
import Button from 'react-bootstrap'; 

export class Hero extends React.Component {


  componentWillMount() {
    console.log('componentWillMount')
  }

  onClick() {
    console.log('startProfile')
  }

  render() {
    return (
      <div className='hero-container'>
        <div className='hero'>
          <h1>Lets get started on your new profile</h1>
        </div>
        <Button bsStyle='primary' onClick={onClick}>
        Get Started
        </Button>
      </div>
    );
  }
}
