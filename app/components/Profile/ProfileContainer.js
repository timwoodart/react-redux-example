import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Column } from 'react-cellblock';
import { ProfileForm, ProfileDisplay } from '../../components';
import { updateProfile } from '../../actions/ProfileActions';

// console.log(ProfileActions)

class ProfileContainer extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentDidMount() {
  //   //get store details
  //   const {store} = this.context;
  //   this.unsubscribe = store.subscribe(() => 
  //     this.forceUpdate()
  //   );
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  handleSubmit(userObj) {
    this.props.updateProfile(userObj);
  }

  render() {

    console.log('render in Container')
    // const {store} = this.context;
    // const state = store.getState();
    // console.log(state);

    let { profile } = this.props;

    console.log(profile);

    return (
      <Grid>
        <h1>{this.props.formHeading}</h1>
        <Row>
          <Column width="1/2">
            <ProfileForm
              formHeading="Let you start off by adding a little about yourself"
              handleSubmit={ this.handleSubmit }
            />
          </Column>
          <Column width="1/2">
            <ProfileDisplay
              userDetails={ profile }
            />
          </Column>
        </Row>
      </Grid>
    );
  }
}

ProfileContainer.propTypes = {
  updateProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
  return {
    profile: state.profile
  }
}

// map state and dispatch to Props
export default connect(
  mapStateToProps, {
    updateProfile
  }
)(ProfileContainer);