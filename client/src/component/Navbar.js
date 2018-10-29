import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Visibility, Container, Menu } from 'semantic-ui-react';
import "../css/Navbar.css";

class Navbar extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.mountMenu = this.mountMenu.bind(this)
    this.state = {
      activeLink: 'work',
      mount: false
    }
  }

  handleClick = (e, { id }) => {
    this.setState({
      activeLink: id
    })
  }

  mountMenu = () => {
    this.setState({
      mount: true
    })
  }

  unmountMenu = () => {
    this.setState({
      mount: false
    })
  }

  render() {
    const { activeLink, mount } = this.state
    return (
      <Visibility onBottomPassed={this.mountMenu} onBottomVisible={this.unmountMenu} once={false}>
        <Menu className={mount ? 'borderless' : 'borderless secondary pointing'} fixed={mount && 'top'}>
          <Container>
            <Menu.Item as='div' position='left' header active={mount ? false : true}>
              <NavLink to='/'>
                Amin Roslan
              </NavLink>
            </Menu.Item>
            <Menu.Item as='div' onClick={this.handleClick} active={mount ? false : activeLink === 'work'} id='work'>
              <NavLink to='/'>
                Work
              </NavLink>
            </Menu.Item>
            <Menu.Item as='div' onClick={this.handleClick} active={mount ? false : activeLink === 'about'} id='about'>
              <NavLink to='/about'>
                About
              </NavLink>
            </Menu.Item>
          </Container>
        </Menu>
      </Visibility>
    )
  }
}

export default Navbar;
