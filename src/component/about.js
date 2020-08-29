import React, { Component } from 'react';
import profie_pic from '../images/profile-pic.JPEG';
const Host = process.env.REACT_APP_RESUME_PATH;

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>About</h5>
            <h1>Let me introduce myself.</h1>
            <div className="intro-info">
              <img src= {profie_pic} alt= {"Profile Pic"}/>
              <p className="lead">My Self Gaurav Makwana I am from India, Right now I am working in Vebuin Pvt Ltd in Tsukuba Ibaraki Japan as a Ruby On Rails Developer.</p>
            </div>
          </div>
        </div>
        <div className="row about-content">
          <div className="col-six tab-full">
            <h3>Profile</h3>
            <p>I had 4+ Years of experience in Ruby On Rails
              also work on Reactjs, Recently I achieved AWS cloud practitioner
              certificate.
            </p>

            <ul className="info-list">
              <li>
                <strong>Fullname:</strong>
                <span>Gaurav M Makwana</span>
              </li>
              <li>
                <strong>Birth Date:</strong>
                <span>September 02, 1993</span>
              </li>
              <li>
                <strong>Job:</strong>
                <span>Ruby On Rails Developer | ReactJs Developer</span>

              </li>
              <li>
                <strong>Email:</strong>
                <span>gauravmakwana93@gmail.com</span>
              </li>
              <li>
                <strong>Mobile No:</strong>
                <span>+81 8071983828</span>
              </li>
              
            </ul> 
          </div>

          <div className="col-six tab-full">
            <h3>Skills</h3>
            <p>I had below technical skills.</p>
            <ul className="skill-bars">
              <li>
                <div className="progress percent90"><span>85%</span></div>
                <strong>Ruby On Rails</strong>
              </li>
              <li>
                <div className="progress percent80"><span>80%</span></div>
                <strong>RSpec</strong>
              </li>
              <li>
                <div className="progress percent60"><span>60%</span></div>
                <strong>Docker Basic</strong>
              </li>
              <li>
                <div className="progress percent70"><span>70%</span></div>
                <strong>AWS Fundamentals</strong>
              </li>
              <li>
                <div className="progress percent75"><span>75%</span></div>
                <strong>ReactJs/Redux</strong>
              </li>
              <li>
                <div className="progress percent75"><span>75%</span></div>
                <strong>JQuery</strong>
              </li>
              <li>
                <div className="progress percent80"><span>80%</span></div>
                <strong>Postgresql</strong>
              </li>
              <li>
                <div className="progress percent80"><span>80%</span></div>
                <strong>HTML</strong>
              </li>
            </ul>
        </div>
      </div>

   	  <div className="row button-section">
        <div className="col-twelve">
          <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
          <a href= {Host} target= "new"title="Download CV" className="button button-primary">Download CV</a>
        </div>
   	  </div>
   </section> 
    )
  }
}

export default About;