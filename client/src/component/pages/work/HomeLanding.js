import React, { Component } from 'react';
import { Loader, Container, Header } from 'semantic-ui-react';
import '../../../css/HomeLanding.css';

class HomeLanding extends Component {
  render() {
    let landing = this.props.landingTitle
    return landing
      ? <div className='home-landing'>
          <Container text>
            <Header size='huge' textAlign='center' className='home-title'>
              {landing.title}
            </Header>
          </Container>
        </div>
      : <div className='home-landing'>
          <Container text>
            <Header size='huge' textAlign='center' className='home-title'>
              <Loader active inline='centered' />
            </Header>
          </Container>
        </div>
  }
}

export default HomeLanding;
