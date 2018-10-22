import React, { Component } from 'react';
import HomeLanding from './HomeLanding';
import WorkLanding from './WorkLanding';

class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeLanding landingTitle={this.props.parentState.landing}/>
        <WorkLanding projects={this.props.parentState.projects}/>
      </React.Fragment>
    )
  }
}

export default Work;
