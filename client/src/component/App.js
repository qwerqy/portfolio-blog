import React, { Component } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Work from './pages/work/Work' ;
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Footer from './Footer';
import '../css/App.css';

class App extends Component {


  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="App">
            <Navbar />
            <Route exact path='/' component={Work} />
            <Route path='/about' component={About} />
            <Route path='/blog' component={Blog} />
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
