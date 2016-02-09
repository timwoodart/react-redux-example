import React, { Component, PropTypes } from 'react';
require('../../../sass/app.scss');

class App extends Component {
  constructor(props) {
    super(props);
    
    // default states
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <div className="main-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
}

App.defaultProps = {
}

export default App;