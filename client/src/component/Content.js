import React, { Component } from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Project from "./pages/projects/Project";
import Footer from "./Footer";
import NotFound from "./NotFound";

import "../css/Content.css";

class Content extends Component {
  render() {
    const { location } = this.props;
    return (
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={"fade"}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={() => <Work parentState={this.props.parentState} />}
              />
              <Route path="/about" component={About} />
              <Route path={`/projects/:id`} component={Project} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(Content);
