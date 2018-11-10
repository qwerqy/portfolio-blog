import React, { Component } from "react";
import { Transition, Loader, Container, Header } from "semantic-ui-react";
import "../../../css/HomeLanding.css";

class HomeLanding extends Component {
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
    let landing = this.props.landingTitle;
    const { visible } = this.state;
    return (
      <div className="home-landing">
        <Container text>
          <Transition visible={visible} animation="fade up" duration={1500}>
            <Header size="huge" textAlign="center" className="home-title">
              {landing 
              ? (
                this.handleFade.bind(this) && <span>{landing.title} <a href={landing.link} style={{color:'#4BAD00'}}>{landing.link_name}</a></span>
              ) 
              : (
                <Loader active inline="centered" />
              )}
              
            </Header>
          </Transition>
        </Container>
      </div>
    );
  }
}

export default HomeLanding;
