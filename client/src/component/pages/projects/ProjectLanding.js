import React, { Component } from 'react';
import { Loader, Container, Header } from 'semantic-ui-react';
import '../../../css/ProjectLanding.css';

class ProjectLanding extends Component {
  constructor() {
    super()
  }

  render() {
    let project = this.props.project
    console.log(project)
    return project
        ? <div className='project-landing'>
            <Container text>
              <Header size='huge' textAlign='center' className='project-title'>
                {project.title}
                <Header.Subheader>
                  {project.subtitle}
                </Header.Subheader>
              </Header>
            </Container>
          </div>

        : <div className='project-landing'>
            <Container text>
              <Header size='huge' textAlign='center' className='project-title'>
                <Loader active inline='centered' />
              </Header>
            </Container>
          </div>
  }
}

export default ProjectLanding;