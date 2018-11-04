import React, { Component } from "react";
import { Icon,Container, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../css/NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <Container text textAlign="center" className='notFound'>
        <div className='notFoundBox'>
          <Header as="h1" icon>
            <Icon name='frown outline'/>
            404: Not found
            <Header.Subheader>The page you requested is nowhere to be found!</Header.Subheader>
          </Header>
          <br/>
          <Button as={Link} to="/">
            Back to home
          </Button>
        </div>
      </Container>
    );
  }
}

export default NotFound;
