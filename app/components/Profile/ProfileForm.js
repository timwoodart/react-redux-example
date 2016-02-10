import React from 'react';
import {Input} from 'react-bootstrap';
import {Grid, Row, Column} from 'react-cellblock';

export default class ProfileForm extends React.Component {
  render() {
    return (

      <Grid>
        <h1>Add your Info</h1>
        <Row>
          <Column width="1/2">
              <form className="profile-form">
                <fieldset>
                  <Input 
                    type="text"
                    label="First Name"
                    placeholder="Enter your First Name"
                  />
                  <Input 
                    type="text"
                    label="Last Name"
                    placeholder="Enter your Last Name"
                  />
                  <Input 
                    type="text"
                    label="Title"
                    placeholder="Enter your Professional Title"
                  />
                  <Input 
                    type="text"
                    label="City"
                    placeholder="Enter the City you live in"
                  />
                </fieldset>
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
