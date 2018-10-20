import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import '../../../css/SelldomeLanding.css';

class SelldomeLanding extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='selldome-landing'>
        <Container text>
          <Header size='huge' textAlign='center' className='selldome-title'>
            Selldome
            <Header.Subheader>
              An AirBnB clone project.
            </Header.Subheader>
          </Header>
        </Container>
      </div>
    )
  }
}

export default SelldomeLanding;
