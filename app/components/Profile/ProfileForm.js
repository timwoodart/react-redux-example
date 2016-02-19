import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {Input, Button} from 'react-bootstrap';

export default class ProfileForm extends React.Component {

  constructor(props) {
    super(props);
    // local binding
    this._submitProfile = this._submitProfile.bind(this);
    this._getFormRefs = this._getFormRefs.bind(this);
  }

  _getFormRefs() {
    return {
      userFirstName: findDOMNode(this.refs.userFirstName.getInputDOMNode()).value,
      userLastName: findDOMNode(this.refs.userLastName.getInputDOMNode()).value,  
      userTitle: findDOMNode(this.refs.userTitle.getInputDOMNode()).value,
      userCity: findDOMNode(this.refs.userCity.getInputDOMNode()).value
    }
  }
  
  _submitProfile(e) {
    e.preventDefault();
    // get refs
    var userProfile = this._getFormRefs();

    // dispatch update
    this.props.handleSubmit(userProfile);
  }

  render() {
    return (
      <form ref="profileForm" className="profile-form" onSubmit={this._submitProfile}>
        <fieldset>
          <Input
            ref="userFirstName"
            type="text"
            label="First Name"
            placeholder="Enter your First Name"
          />
          <Input 
            ref="userLastName"
            type="text"
            label="Last Name"
            placeholder="Enter your Last Name"
          />
          <Input
            ref="userTitle" 
            type="text"
            label="Title"
            placeholder="Enter your Professional Title"
          />
          <Input 
            ref="userCity"
            type="text"
            label="City"
            placeholder="Enter the City you live in"
          />
        </fieldset>
        <Button
          type="submit"
          bsSize='large'
          bsStyle='primary'>
            Update Preview
        </Button>
      </form>
    );
  }
}

ProfileForm.propTypes = {
  formHeading: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
}

ProfileForm.defaultProps = {
  formHeading: 'Start by adding your info'
}