import React, {Component} from 'react';
import {Segment, Container, Header, Grid} from 'semantic-ui-react';
import '../css/CoverLanding.css';

class CoverLanding extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Segment  inverted basic style={{height: '100vh'}}>
        <Grid centered verticalAlign='middle'>
          <Grid column>
            <Header as='h1' content="Hi, I'm Amin" inverted style={{ }}/>
          </Grid>
        </Grid>
      </Segment>
    )
  }
}

export default CoverLanding;
