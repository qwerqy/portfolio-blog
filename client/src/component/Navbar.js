import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import "../css/Navbar.css";

class Navbar extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      activeLink: 'work'
    }
  }

  handleClick = (e, { id }) => {
    this.setState({
      activeLink: id
    })
  }

  render() {
    const { activeLink } = this.state
    return (
      <Menu secondary pointing>
        <Container>
          <Menu.Item position='left' header active>Amin Roslan</Menu.Item>
          <Menu.Item as='p' onClick={this.handleClick} active={activeLink === 'work'} id='work'>
            <NavLink to='/'>
              Work
            </NavLink>
          </Menu.Item>
          <Menu.Item as='p' onClick={this.handleClick} active={activeLink === 'about'} id='about'>
            <NavLink to='/about'>
              About
            </NavLink>
          </Menu.Item>
          <Menu.Item as='p' onClick={this.handleClick} active={activeLink === 'blog'} id='blog'>
            <NavLink to='/blog'>
              Blog
            </NavLink>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Navbar;
