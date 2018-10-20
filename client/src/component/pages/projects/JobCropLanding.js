import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import '../../../css/JobCropLanding.css';

class JobCropLanding extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='jobcrop-landing'>
        <Container text>
          <Header size='huge' textAlign='center' className='jobcrop-title'>
            JobCrop
            <Header.Subheader>
              The solution for Jobhunters
            </Header.Subheader>
          </Header>
        </Container>
      </div>
    )
  }
}

export default JobCropLanding;
