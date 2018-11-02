import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Transition,
  Divider,
  Loader,
  Image,
  Container,
  Grid,
  Card
} from "semantic-ui-react";

class WorkLanding extends Component {
  constructor() {
    super();
    this.handleFade = this.handleFade.bind(this);
    this.state = {
      visible: false
    };
  }

  componentDidMount = () => {
    this.handleFade();
  };

  handleFade = () => {
    this.setState({
      visible: true
    });
  };

  handleMouseOver = (id) => {
    const element = document.querySelector(`#project-${id}`)
    element.classList.add('raised')
  }

  handleMouseOut = (id) => {
    const element = document.querySelector(`#project-${id}`)
    element.classList.remove('raised')
  }

  render() {
    const { visible } = this.state;
    const { projects } = this.props;

    return (
      <Container>
        <Transition visible={visible} animation="fade up" duration={1300}>
          <Grid stackable>
            <Grid.Row columns={2}>
              {projects && projects.length ? (
                this.handleFade &&
                Object.keys(projects).map(key => {
                  return (
                    <Grid.Column key={projects[key].id}>
                      <NavLink to={`/projects/${projects[key].id}`}>
                        <Card fluid id={'project-'+projects[key].id}
                          onMouseOver={() => this.handleMouseOver(projects[key].id)}
                          onMouseOut={() => this.handleMouseOut(projects[key].id)}>
                          {projects[key].display_photo && (
                            <Image src={projects[key].display_photo} fluid />
                          )}
                          {projects[key].title &&
                            projects[key].techstack &&
                            projects[key].short_description && (
                              <Card.Content>
                                <Card.Header className="blog-title">
                                  {projects[key].title}
                                </Card.Header>
                                <Card.Meta>{projects[key].techstack}</Card.Meta>
                                <Card.Description className="blog-content">
                                  {projects[key].short_description}
                                </Card.Description>
                              </Card.Content>
                            )}
                        </Card>
                      </NavLink>
                      <Divider hidden />
                    </Grid.Column>
                  );
                })
              ) : (
                <Loader active inline="centered" />
              )}
            </Grid.Row>
          </Grid>
        </Transition>
      </Container>
    );
  }
}

export default WorkLanding;
