import React, { Component } from "react";
import { Transition, Container, Header } from "semantic-ui-react";
import "../../../css/AboutLanding.css";

class AboutLanding extends Component {
  state = {
    visible: false
  };

  componentDidMount = () => {
    this.handleFade();
  };

  handleFade = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="about-landing">
        <Transition visible={visible} animation="fade up" duration={1000}>
          <Container text>
            <Header size="huge" textAlign="center" className="about-title">
              About me?
            </Header>
          </Container>
        </Transition>
      </div>
    );
  }
}

export default AboutLanding;
