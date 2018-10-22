import React, { Component } from 'react';
import { Loader, Container, Header } from 'semantic-ui-react';
import '../../../css/HomeLanding.css';

class HomeLanding extends Component {
  constructor() {
    super()
    this.getLandingTitle = this.getLandingTitle.bind(this)
    this.state = {}
  }

  componentDidMount() {
    this.getLandingTitle(1)
  }

  fetch = (endpoint) => {
    return window.fetch(endpoint)
    .then (response => response.json())
    .catch (error => console.log(error))
  }

  getLandingTitle = (id) => {
    this.fetch(`/api/landings/${id}`)
    .then(landing => this.setState({landing: landing}))
  }

  render() {
    let { landing } = this.state
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
