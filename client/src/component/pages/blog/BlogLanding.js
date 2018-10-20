import React, { Component } from 'react';
import { Icon, Container, Header } from 'semantic-ui-react';
import '../../../css/BlogLanding.css';

class BlogLanding extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='blog-landing'>
        <Container text>
          <Header size='huge' textAlign='center' className='blog-landing'>
            Welcome to the blog! Hmm apparently it's still under construction. Come back later!
            <Icon color='yellow' name='warning sign'/>
          </Header>
        </Container>
      </div>
    )
  }
}

export default BlogLanding;
