import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {Input, Button} from 'react-bootstrap';
import {Grid, Row, Column} from 'react-cellblock';

export default class ProfileForm extends React.Component {

  constructor(props) {
    super(props);
    
    // default state
    this.state = {
      'firstName': '',
      'lastName': '',
      'title': '',
      'city': ''
    }

    this._submitProfile = this._submitProfile.bind(this);
    this._updateInput = this._updateInput.bind(this);
  }
  
  _submitProfile(e) {
    e.preventDefault();
    // TODO - dispatch values to update state tree
  }

  _updateInput(inputName, e) {
    // es6 computed property names for inputName
    this.setState({[inputName]: e.target.value});
  }

  render() {
    return (

      <Grid>
        <h1>{this.props.formHeading}</h1>
        <Row>
          <Column width="1/2">
              <form ref="profileForm" className="profile-form">
                <fieldset>
                  <Input
                    type="text"
                    label="First Name"
                    placeholder="Enter your First Name"
                    onChange={this._updateInput.bind(null, 'firstName')}
                    value={this.state.firstName}
                  />
                  <Input 
                    id="lastName"
                    type="text"
                    label="Last Name"
                    placeholder="Enter your Last Name"
                    onChange={this._updateInput.bind(null, 'lastName')}
                    value={this.state.lastName}
                  />
                  <Input 
                    type="text"
                    label="Title"
                    placeholder="Enter your Professional Title"
                    onChange={this._updateInput.bind(null, 'title')}
                    value={this.state.title}
                  />
                  <Input 
                    type="text"
                    label="City"
                    placeholder="Enter the City you live in"
                    onChange={this._updateInput.bind(null, 'city')}
                    value={this.state.city}
                  />
                </fieldset>
                <Button
                  bsSize='large'
                  bsStyle='primary'
                  onClick={this._submitProfile}>
                    Submit
                </Button>
              </form>

          </Column>
          <Column width="1/2">
            Your Profile:
          </Column>
        </Row>
      </Grid>
    );
  }
}

ProfileForm.propTypes = {
  formHeading: PropTypes.String
}

ProfileForm.defaultProps = {
  formHeading: 'Start by adding your info'
}