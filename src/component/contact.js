import React, { Component } from 'react'

 class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-intro">
          <div className="col-twelve">

            <h5>Contact</h5>
            <h1>I'd Love To Hear From You.</h1>

            <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>

          </div>
        </div> 

   	  <div className="row contact-form">
        <div className="col-twelve">
          <form name="contactForm" id="contactForm" method="post" action="">
          <fieldset>
            <div className="form-field">
              <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minLength="2" required=""/>
            </div>
            <div className="form-field">
              <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required=""/>
            </div>
            <div className="form-field">
              <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value=""/>
            </div>
            <div className="form-field">
                <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required=""></textarea>
            </div>
            <div className="form-field">
              <button className="submitform">Submit</button>
              <div id="submit-loader">
                <div className="text-loader">Sending...</div>
              <div className="s-loader">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
              </div>
              </div>
             </div>
          </fieldset>
        </form> 

              
        <div id="message-warning"></div>    
        <div id="message-success">
          <i className="fa fa-check"></i>Your message was sent, thank you!<br/>>
        </div>
        </div> 
      </div> 

      <div className="row contact-info">
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-pin"></i>
          </div>
          <h5>Where to find me</h5>
          <p>
            A7 Shivnagari Society<br/>
            Bombay Match Factory Compound<br/>
            B/H Railway Station, Khambhat<br/>
            Khambhat(388620), Anand<br/>
            India
          </p>
        </div>
        <div className="col-four tab-full collapse">
          <div className="icon">
            <i className="icon-mail"></i>
          </div>
          <h5>Email Me At</h5>
          <p>gauravmakwana93@gmail.com</p>

        </div>
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-phone"></i>
          </div>
          <h5>Call Me At</h5>
          <p>Mobile: (+91) 958 604 9525</p>
        </div>
      </div> 
	  </section>
    )
  }
}

export default Contact;
