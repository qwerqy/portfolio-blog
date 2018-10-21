import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import '../../../css/HomeLanding.css';

class HomeLanding extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='home-landing'>
        <Container text>
          <Header size='huge' textAlign='center' className='home-title'>
            Hello, I am Amin. I am a software engineer.
          </Header>
        </Container>
      </div>
    )
  }
}

export default HomeLanding;
