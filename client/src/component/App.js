import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Project from "./pages/projects/Project";
import NotFound from "./NotFound";
import Footer from "./Footer";
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
        <React.Fragment>
          <div className="App">
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Work parentState={this.state} />}
              />
              <Route path="/about" component={About} />
              <Route path={`/projects/:id`} component={Project} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
