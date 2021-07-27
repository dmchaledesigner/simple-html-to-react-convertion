import React from 'react';


import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Service from './components/Service';
import Single from './components/Single';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>


      <Router>

        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Service} />
          <Route path='/single' component={Single} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/contact' component={Contact} />
        </Switch>

        <Footer />

      </Router>


    </React.Fragment>
  );
}

export default App;
