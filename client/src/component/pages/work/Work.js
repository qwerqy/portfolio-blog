import React, { Component } from 'react';
import HomeLanding from './HomeLanding';
import WorkLanding from './WorkLanding';

class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeLanding />
        <WorkLanding />
      </React.Fragment>
    )
  }
}

export default Work;
