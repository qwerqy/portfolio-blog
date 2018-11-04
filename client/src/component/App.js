import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar";

import Content from "./Content";
import "../css/App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getLandingTitle(1);
    this.getProjects();
  }

  fetch = endpoint => {
    return window
      .fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error));
  };

  getLandingTitle = id => {
    this.fetch(`/api/landings/${id}`).then(landing =>
      this.setState({ landing: landing })
    );
  };

  getProjects = () => {
    this.fetch("/api/projects").then(projects => {
      projects
        ? this.setState({ projects: projects })
        : this.setState({ projects: [] });
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Content parentState={this.state} />
        </div>
      </Router>
    );
  }
}

export default App;
