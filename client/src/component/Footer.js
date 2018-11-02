import React, { Component } from "react";
import { Icon, Responsive, Container, Divider, Menu } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Divider />
        <Responsive {...Responsive.onlyComputer}>
          <Container textAlign="center">
            <Menu secondary hidden fluid widths={10}>
              <Menu.Item
                active
                as="a"
                target="_blank"
                href="https://docs.google.com/document/d/1YGuT2nN_RMYockL5b0A6rK02uw2ZsoiQF8iCWHoQMuE/edit?usp=sharing"
              >
                Resumé
              </Menu.Item>
              <Menu.Item
                as="a"
                target="_blank"
                href="https://www.facebook.com/amnrsln"
              >
                Facebook
              </Menu.Item>
              <Menu.Item
                as="a"
                target="_blank"
                href="https://github.com/qwerqy"
              >
                Github
              </Menu.Item>
              <Menu.Item
                as="a"
                target="_blank"
                href="https://www.linkedin.com/in/aminroslan/"
              >
                LinkedIn
              </Menu.Item>
            </Menu>
          </Container>
          <Container textAlign="center">
            <Divider hidden color="grey" />
            <Icon name="copyright outline" /> 2018 Amin Roslan
            <Divider hidden />
          </Container>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Container textAlign="center">
            <Menu secondary fluid widths={8}>
              <Menu.Item
                active
                as="a"
                target="_blank"
                href="https://docs.google.com/document/d/1YGuT2nN_RMYockL5b0A6rK02uw2ZsoiQF8iCWHoQMuE/edit?usp=sharing"
              >
                Resumé
              </Menu.Item>
              <Menu.Item
                as="a"
                target="_blank"
                href="https://www.facebook.com/amnrsln"
              >
                Facebook
              </Menu.Item>
              <Menu.Item
                as="a"
                target="_blank"
                href="https://github.com/qwerqy"
              >
                Github
              </Menu.Item>
              <Menu.Item
                as="a"
                target="_blank"
                href="https://www.linkedin.com/in/aminroslan/"
              >
                LinkedIn
              </Menu.Item>
            </Menu>
          </Container>
          <Container textAlign="center">
            <Divider hidden color="grey" />
            <Icon name="copyright outline" /> 2018 Amin Roslan
            <Divider hidden />
          </Container>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Menu secondary fluid widths={4}>
            <Menu.Item
              active
              as="a"
              target="_blank"
              href="https://docs.google.com/document/d/1YGuT2nN_RMYockL5b0A6rK02uw2ZsoiQF8iCWHoQMuE/edit?usp=sharing"
            >
              Resumé
            </Menu.Item>
            <Menu.Item
              as="a"
              target="_blank"
              href="https://www.facebook.com/amnrsln"
            >
              Facebook
            </Menu.Item>
            <Menu.Item as="a" target="_blank" href="https://github.com/qwerqy">
              Github
            </Menu.Item>
            <Menu.Item
              as="a"
              target="_blank"
              href="https://www.linkedin.com/in/aminroslan/"
            >
              LinkedIn
            </Menu.Item>
          </Menu>
          <Container textAlign="center">
            <Divider hidden color="grey" />
            <Icon name="copyright outline" /> 2018 Amin Roslan
            <Divider hidden />
          </Container>
        </Responsive>
      </React.Fragment>
    );
  }
}

export default Footer;
