import React, { Component } from 'react';
import { Responsive, Container, Divider, Menu } from 'semantic-ui-react';

class Footer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <React.Fragment>
        <Divider />
        <Responsive {...Responsive.onlyComputer}>
          <Container textAlign='center'>
            <Menu secondary pointing fluid widths={10}>
              <Menu.Item active>Resumé</Menu.Item>
              <Menu.Item>Email</Menu.Item>
              <Menu.Item>Github</Menu.Item>
              <Menu.Item>LinkedIn</Menu.Item>
            </Menu>
          </Container>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Container textAlign='center'>
            <Menu secondary fluid widths={8}>
              <Menu.Item>Resumé</Menu.Item>
              <Menu.Item>Email</Menu.Item>
              <Menu.Item>Github</Menu.Item>
              <Menu.Item>LinkedIn</Menu.Item>
            </Menu>
          </Container>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Menu secondary fluid widths={6}>
            <Menu.Item>Resumé</Menu.Item>
            <Menu.Item>Email</Menu.Item>
            <Menu.Item>Github</Menu.Item>
            <Menu.Item>LinkedIn</Menu.Item>
          </Menu>
        </Responsive>
      </React.Fragment>
    )
  }
}

export default Footer;
