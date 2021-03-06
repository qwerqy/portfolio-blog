import React, { Component } from "react";
import {
  Menu,
  Button,
  Image,
  Divider,
  Header,
  Container,
  Placeholder
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import ProjectLanding from "./ProjectLanding";

class Project extends Component {
  state = {};

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getProject(id);
  }

  fetch = endpoint => {
    return window
      .fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error));
  };

  getProject = id => {
    this.fetch(`/api/projects/${id}`).then(project => {
      project
        ? this.setState({ project: project })
        : this.setState({ project: [] });
    });
  };

  render = () => {
    let { project } = this.state;
    return (
      <React.Fragment>
        <ProjectLanding project={project} />
        <Container text>
          {project ? (
            project.paragraphs && project.paragraphs.length ? (
              project.paragraphs.map((paragraph, i) => {
                return (
                  <div key={i}>
                    <Image src={paragraph.photos} />
                    <Header size="large">{paragraph.title}</Header>
                    <Divider hidden />
                    {paragraph.content}
                    <Divider hidden />
                    {paragraph.live && paragraph.github ? (
                      <Menu text fluid widths={2} size="huge">
                        <Menu.Item as="a" target="_blank" href={paragraph.live}>
                          <b>Live Site</b>
                        </Menu.Item>
                        <Menu.Item
                          as="a"
                          target="_blank"
                          href={paragraph.github}
                        >
                          <b>Github Repo</b>
                        </Menu.Item>
                      </Menu>
                    ) : (
                      false
                    )}
                  </div>
                );
              })
            ) : (
              <Container text textAlign="center">
                <p>Something's wrong. Check back again later.</p>
                <Button as={Link} to="/">
                  Back to home
                </Button>
              </Container>
            )
          ) : (
            <Placeholder fluid>
              <Placeholder.Header>
                <Placeholder.Line length="very short" />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
              <Placeholder.Header>
                <Placeholder.Line length="very short" />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
              <Placeholder.Header>
                <Placeholder.Line length="very short" />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          )}
        </Container>
      </React.Fragment>
    );
  };
}

export default Project;
