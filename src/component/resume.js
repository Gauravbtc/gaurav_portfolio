import React, { Component } from 'react'


class Resume extends Component {
  render() {
    return (
      <section id="resume" className="grey-section">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Resume</h5>
            <h1>More of my credentials.</h1>
            <p className="lead">I am currently employed at Thinkbiz Technologies Pvt Ltd. as a Ruby On Rails Developer with 2+ years of experience.</p>
          </div>
        </div>
       <div className="row resume-timeline">
         <div className="col-twelve resume-header">
           <h2>Work Experience</h2>
         </div> 
         <div className="col-twelve">
           <div className="timeline-wrap">
             <div className="timeline-block">
               <div className="timeline-ico">
                 <i className="fa fa-briefcase"></i>
               </div>
               <div className="timeline-header">
                 <h3>Ruby On Rails Developer</h3>
                 <p>Nov 2016 - Present</p>
               </div>
  
               <div className="timeline-content">
                 <h4>Thinkbiz Technology Pvt Ltd</h4>
                 <p>I am working this organization from Nov 2016.I am contributing to each and every aspect of web development related to Ruby on Rails and other Technology.</p>
               </div>
             </div>
  
             <div className="timeline-block">
               <div className="timeline-ico">
                 <i className="fa fa-briefcase"></i>
               </div>
  
               <div className="timeline-header">
                 <h3>Ruby On Rails Developer</h3>
                 <p>May 2016 - Oct 2016</p>
               </div>
  
               <div className="timeline-content">
                 <h4>Botree technologies Pvt Ltd </h4>
                 <p>I Worked this origanization. I get training from Ruby on Rails experts aslo contributed my work in this origanization.</p>
               </div>
             </div>
           </div> 
  
         </div>
  
       </div> 
  
       <div className="row resume-timeline">
  
         <div className="col-twelve resume-header">
  
           <h2>Education</h2>
  
         </div>
  
         <div className="col-twelve">
  
           <div className="timeline-wrap">
  
             <div className="timeline-block">
  
               <div className="timeline-ico">
                 <i className="fa fa-graduation-cap"></i>
               </div>
  
               <div className="timeline-header">
                 <h3>Master Of Computer Application</h3>
                 <p>July 2014 - April 2016</p>
               </div>
  
               <div className="timeline-content">
                 <h4>Dharamsinh Desai University</h4>
                 <p>I Completed master of computer application degree from this university. with aggregate 70.17 %.</p>
               </div>
  
             </div>
  
             <div className="timeline-block">
  
               <div className="timeline-ico">
                 <i className="fa fa-graduation-cap"></i>
               </div>
  
               <div className="timeline-header">
                 <h3>Bachelor Of Computer Application</h3>
                 <p>July 2011 - June 2014</p>
               </div>
  
               <div className="timeline-content">
                 <h4>Dharamsinh Desai University</h4>
                 <p>I Completed master of computer application degree from this university. with aggregate 76.46 %.</p>
               </div>
             </div>
           </div> 
  
         </div>
  
       </div> 
  
    </section> 
    )
  }
}
export default Resume;