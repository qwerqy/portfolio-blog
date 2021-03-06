import React, { Component } from "react";
import { Icon, Responsive, Container, Divider, Menu } from "semantic-ui-react";

class Footer extends Component {
  state = {
    widths: 10,
    items: [
      {
        id: 1,
        title: "Resume",
        link:
          "https://docs.google.com/document/d/1YGuT2nN_RMYockL5b0A6rK02uw2ZsoiQF8iCWHoQMuE/edit?usp=sharing"
      },
      {
        id: 2,
        title: "Facebook",
        link: "https://www.facebook.com/amnrsln"
      },
      {
        id: 3,
        title: "Github",
        link: "https://github.com/qwerqy"
      },
      {
        id: 4,
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/aminroslan/"
      }
    ]
  };

  handleWidth = width => {
    if (width >= 992) {
      this.setState({
        widths: 10
      });
    } else if (width <= 991 && width >= 768) {
      this.setState({
        widths: 8
      });
    } else if (width <= 767 && width >= 320) {
      this.setState({
        widths: 4
      });
    }
  };

  render() {
    const { widths, items } = this.state;
    return (
      <React.Fragment>
        <Divider />
        <Responsive getWidth={() => this.handleWidth(window.innerWidth)}>
          <Container textAlign="center">
            <Menu secondary hidden fluid widths={widths}>
              {items.map(item => (
                <Menu.Item
                  key={item.id}
                  as="a"
                  target="_blank"
                  href={item.link}
                >
                  {item.title}
                </Menu.Item>
              ))}
            </Menu>
          </Container>
          <Container textAlign="center">
            <Divider hidden color="grey" />
            <Icon name="copyright outline" /> 2018 Amin Roslan (v20.1)
            <Divider hidden />
          </Container>
        </Responsive>
      </React.Fragment>
    );
  }
}

export default Footer;
