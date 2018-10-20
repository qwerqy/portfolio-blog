import React, { Component } from 'react';
import Navbar from './Navbar';
import HomeLanding from './HomeLanding';
import WorkLanding from './WorkLanding' ;
import Footer from './Footer';
import '../css/App.css';

class App extends Component {


  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar />
          <HomeLanding />
          <WorkLanding />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
