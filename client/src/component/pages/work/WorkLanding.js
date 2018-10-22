import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Loader, Placeholder, Responsive, Segment, Image, Container, Grid, Card } from 'semantic-ui-react';

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
    this.getProjects()
  }

  raisedOnHover(id) {
    const element = document.getElementById(id)
    if (element != null) {
      element.addEventListener('mouseover', () => {
        element.classList.add('raised')
      })
      element.addEventListener('mouseout', () => {
        element.classList.remove('raised')
      })
    }
  }

  fetch = (endpoint) => {
    return window.fetch(endpoint)
    .then (response => response.json())
    .catch (error => console.log(error))
  }

  getProjects = () => {
    this.fetch('/api/projects')
    .then(projects => {
      projects ? this.setState({ projects: projects}) : this.setState({ projects: []})
    })
  }

  render() {
    let { projects } = this.state
    return (
      <Container>
        <Responsive {...Responsive.onlyComputer}>
          <Grid stackable>
            <Grid.Row centered columns={3}>
              {projects
                ? Object.keys(projects).map((key) => {
                  return (
                    <Grid.Column key={projects[key].id}>
                      <NavLink to='/selldome'>
                        <Card fluid id={projects[key].id}>
                          {projects[key].display_photo
                            ? <Image src={projects[key].display_photo} fluid />
                            : <Placeholder>
                                <Placeholder.Image rectangular />
                              </Placeholder>
                          }

                            {projects[key].title && projects[key].techstack && projects[key].short_description
                              ? <Card.Content>
                                  <Card.Header className="blog-title">{projects[key].title}</Card.Header>
                                  <Card.Meta>{projects[key].techstack}</Card.Meta>
                                  <Card.Description className="blog-content">{projects[key].short_description}</Card.Description>
                                </Card.Content>
                              : <Placeholder>
                                  <Placeholder.Header>
                                    <Placeholder.Line />
                                    <Placeholder.Line/>
                                  </Placeholder.Header>
                                  <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                  </Placeholder.Paragraph>
                                </Placeholder>
                            }
                        </Card>
                      </NavLink>
                    </Grid.Column>
                  )
                })
                : <Loader active inline='centered' />
              }
            </Grid.Row>
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Grid>
            <Grid.Row centered columns={1}>
              {projects
                ? Object.keys(projects).map((key) => {
                  return (
                    <Grid.Column key={projects[key].id}>
                      <NavLink to='/selldome'>
                        <Card fluid id={projects[key].id}>
                          {projects[key].display_photo
                            ? <Image src={projects[key].display_photo} fluid />
                            : <Placeholder>
                                <Placeholder.Image rectangular />
                              </Placeholder>
                          }

                            {projects[key].title && projects[key].techstack && projects[key].short_description
                              ? <Card.Content>
                                  <Card.Header className="blog-title">{projects[key].title}</Card.Header>
                                  <Card.Meta>{projects[key].techstack}</Card.Meta>
                                  <Card.Description className="blog-content">{projects[key].short_description}</Card.Description>
                                </Card.Content>
                              : <Placeholder>
                                  <Placeholder.Header>
                                    <Placeholder.Line />
                                    <Placeholder.Line/>
                                  </Placeholder.Header>
                                  <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                  </Placeholder.Paragraph>
                                </Placeholder>
                            }
                        </Card>
                      </NavLink>
                    </Grid.Column>
                  )
                })
                : <Loader active inline='centered' />
              }
            </Grid.Row>
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Grid>
            <Grid.Row centered columns={1}>
              {projects
                ? Object.keys(projects).map((key) => {
                  return (
                    <Grid.Column key={projects[key].id}>
                      <NavLink to='/selldome'>
                        <Card fluid id={projects[key].id}>
                          {projects[key].display_photo
                            ? <Image src={projects[key].display_photo} fluid />
                            : <Placeholder>
                                <Placeholder.Image rectangular />
                              </Placeholder>
                          }

                            {projects[key].title && projects[key].techstack && projects[key].short_description
                              ? <Card.Content>
                                  <Card.Header className="blog-title">{projects[key].title}</Card.Header>
                                  <Card.Meta>{projects[key].techstack}</Card.Meta>
                                  <Card.Description className="blog-content">{projects[key].short_description}</Card.Description>
                                </Card.Content>
                              : <Placeholder>
                                  <Placeholder.Header>
                                    <Placeholder.Line />
                                    <Placeholder.Line/>
                                  </Placeholder.Header>
                                  <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                  </Placeholder.Paragraph>
                                </Placeholder>
                            }
                        </Card>
                      </NavLink>
                    </Grid.Column>
                  )
                })
                : <Loader active inline='centered' />
              }
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    )
  }
}

export default WorkLanding;
