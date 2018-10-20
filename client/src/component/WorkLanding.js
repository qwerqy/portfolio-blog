import React, { Component } from 'react';
import { Responsive, Segment, Image, Container, Grid, Card } from 'semantic-ui-react';

class WorkLanding extends Component {
  constructor() {
    super()
    this.raisedOnHover = this.raisedOnHover.bind(this)
    this.state = {
      raised: 'raised'
    }
  }

  componentDidMount() {
    this.raisedOnHover('selldome')
    this.raisedOnHover('jobcrop')
  }

  raisedOnHover(id) {
    const element = document.getElementById(id)
    element.addEventListener('mouseover', () => {
      element.classList.add('raised')
    })
    element.addEventListener('mouseout', () => {
      element.classList.remove('raised')
    })
  }

  render() {
    return (
      <Container>
        <Responsive {...Responsive.onlyComputer}>
          <Grid>
            <Grid.Row centered columns={3}>
              <Grid.Column>
                <Card fluid id='selldome'>
                  <Image src='https://i.imgur.com/7fmXZvn.png' fluid />
                  <Card.Content>
                    <Card.Header className="blog-title">Selldome</Card.Header>
                    <Card.Meta>Built with Ruby On Rails</Card.Meta>
                    <Card.Description className="blog-content">AirBnb Clone app developed for an assignment during my bootcamp.</Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid id='jobcrop'>
                  <Image src='https://i.imgur.com/m1ytpk6.png' fluid />
                  <Card.Content>
                    <Card.Header className="blog-title">JobCrop</Card.Header>
                    <Card.Meta>Built with React & Ruby On Rails</Card.Meta>
                    <Card.Description className="blog-content">A jobhunting website with a powerful jobhunting metasearch engine.</Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Grid>
            <Grid.Row centered columns={1}>
              <Grid.Column>
                <Card fluid>
                  <Image src='https://i.imgur.com/7fmXZvn.png' fluid />
                  <Card.Content>
                    <Card.Header className="blog-title">Selldome</Card.Header>
                    <Card.Meta>Built with Ruby On Rails</Card.Meta>
                    <Card.Description className="blog-content">AirBnb Clone app developed for an assignment during my bootcamp.</Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid>
                  <Image src='https://i.imgur.com/m1ytpk6.png' fluid />
                  <Card.Content>
                    <Card.Header className="blog-title">JobCrop</Card.Header>
                    <Card.Meta>Built with React & Ruby On Rails</Card.Meta>
                    <Card.Description className="blog-content">A jobhunting website with a powerful jobhunting metasearch engine.</Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Grid>
            <Grid.Row centered columns={1}>
              <Grid.Column>
                <Card fluid>
                  <Image src='https://i.imgur.com/7fmXZvn.png' fluid />
                  <Card.Content>
                    <Card.Header className="blog-title">Selldome</Card.Header>
                    <Card.Meta>Built with Ruby On Rails</Card.Meta>
                    <Card.Description className="blog-content">AirBnb Clone app developed for an assignment during my bootcamp.</Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid>
                  <Image src='https://i.imgur.com/m1ytpk6.png' fluid />
                  <Card.Content>
                    <Card.Header className="blog-title">JobCrop</Card.Header>
                    <Card.Meta>Built with React & Ruby On Rails</Card.Meta>
                    <Card.Description className="blog-content">A jobhunting website with a powerful jobhunting metasearch engine.</Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    )
  }
}

export default WorkLanding;
