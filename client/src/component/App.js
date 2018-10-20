import React, { Component } from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Work from './pages/work/Work' ;
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Selldome from './pages/projects/Selldome';
import JobCrop from './pages/projects/JobCrop';
import Footer from './Footer';
import '../css/App.css';

class App extends Component {


  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Work} />
              <Route path='/about' component={About} />
              <Route path='/blog' component={Blog} />
              // Hard coded for now. will implement with Rails soon
              <Route path='/selldome' component={Selldome} />
              <Route path='/jobcrop' component={JobCrop} />
            </Switch>
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
