import React, { Component } from 'react'
class Intro extends Component {
  render() {
    return (
      <section id="intro">
        <div className="intro-overlay"></div>
  
        <div className="intro-content">
          <div className="row">
  
            <div className="col-twelve">
  
              <h5>Hello.</h5>
              <h1>I'm Gaurav Makwana.</h1>
  
              <p className="intro-position">
                <span>Ruby On Rails Developer</span>
                <span>ReactJs / Redux Developer</span>
                <span> AWS Certified Cloud Practitioner</span>
              </p>
              <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
            </div>
          </div>
        </div> 
        <ul className="intro-social">
            <li><a href="https://in.linkedin.com/in/gaurav-makwana-400199106" target="new"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="https://www.facebook.com/gaurav.makwana.7165" target="new"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/gauravshiv" target="new"><i className="fa fa-instagram"></i></a></li>
        </ul> 
     </section> 
    )
  }
}

export default Intro;
