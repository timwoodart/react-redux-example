import React from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import marked from 'marked';
import styles from './page.scss';

export default React.createClass({
  

  render() {

    let summaryText = marked('All works fine, unless we want to develop with these packages locally with `npm link`.');
    const summary = <div dangerouslySetInnerHTML={{'__html': summaryText}} />;

    return (
      <Grid>
        <Row>
          <Column>
            <header>
              <h1>The purpose of this example is to show nested Components installed from external packages</h1>
              {summary}
            </header>
            <Row className="main-page-component">
              <Column>
                <header>
                  <h1>The main wrapper where we include external components</h1>
                </header>
              </Column>
              <Column width="1/2">
              </Column>
              <Column width="1/2">
                <div>
                  <i>
                    As you can see to the left, that ComponentA is imported into this Main Page Component, and ComponentB is imported through ComponentA
                  </i>
                </div>
              </Column>
            </Row>
          </Column>
        </Row>
      </Grid>
    );
  }
});