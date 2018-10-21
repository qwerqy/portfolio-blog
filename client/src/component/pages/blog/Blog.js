import React, { Component } from 'react';
import BlogLanding from './BlogLanding';
import { Dimmer, Loader, Divider, Header, Container } from 'semantic-ui-react';

class Blog extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.getBlogPosts()

  }

  fetch(endpoint) {
    return window.fetch(endpoint)
    .then(response => response.json())
    .catch(error => console.log(error))
  }

  getBlogPosts() {
    this.fetch('/api/blog_posts')
    .then(blog_posts => {
      if(blog_posts.length) {
        this.setState({
          blog_posts: blog_posts
        })
      } else {
        this.setState({
          blog_posts: []
        })
      }
    })
  }

  render() {
    let { blog_posts } = this.state
    let moment = require('moment');
    return blog_posts
    ? <React.Fragment>
        <BlogLanding />
        <Container text>
          <Header size='large' textAlign='center'>Blog Post</Header>
          { blog_posts && blog_posts.length
            ? Object.keys(blog_posts).sort().reverse().map((key) => {
            return  <div key={key}>
                      <Header>
                        {blog_posts[key].title}
                        <Header.Subheader>Posted {moment(blog_posts[key].created_at).fromNow()}</Header.Subheader>
                      </Header>
                      <Divider hidden />
                      {blog_posts[key].content}
                      <Divider hidden />
                    </div>
            })
            : <Header>No posts found.</Header>
          }
        </Container>
      </React.Fragment>
    : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
    }
}

export default Blog;
