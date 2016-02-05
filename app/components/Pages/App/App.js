import React, { Component } from 'react';
import { Hero } from '../../../components';
require('../../../sass/app.scss');

export default class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Hero />
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
}
