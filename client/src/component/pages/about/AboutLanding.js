import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import '../../../css/AboutLanding.css';

class AboutLanding extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='about-landing'>
        <Container text>
          <Header size='huge' textAlign='center' className='about-title'>
            About me?
          </Header>
        </Container>
      </div>
    )
  }
}

export default AboutLanding;
