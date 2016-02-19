import React, { Component, PropTypes } from 'react';

// Main App Wrapper for Routes
class App extends Component {
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

export default App;