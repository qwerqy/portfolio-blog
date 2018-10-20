import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import "../css/Navbar.css";

class Navbar extends Component {
  constructor() {
    super()
    this.onHover = this.onHover.bind(this)
  }

  componentDidMount() {
    this.onHover('about')
    this.onHover('work')
    this.onHover('blog')
  }

  onHover(id) {
    const element = document.getElementById(id)
    element.addEventListener('mouseover', () => {
      element.classList.add('active')
    })
    element.addEventListener('mouseout', () => {
      element.classList.remove('active')
    })
  }

  render() {
    return (
      <Menu secondary pointing>
        <Container>
          <Menu.Item position='left' header active>Amin Roslan</Menu.Item>
          <Menu.Item id='about'>About</Menu.Item>
          <Menu.Item id='work'>Work</Menu.Item>
          <Menu.Item id='blog'>Blog</Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Navbar;
