import React, { Component } from 'react';
import Header from './component/header';
import Intro from './component/intro';
import About from './component/about';
import Resume from './component/resume';
import Portfolio from './component/portfolio';
import Contact from './component/contact';


class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}
export default App;