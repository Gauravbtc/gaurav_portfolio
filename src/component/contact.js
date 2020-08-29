import React, { Component } from 'react';
import ContactForm from './contact_form';

class Contact extends Component {
  submit = (values) => {
    console.log(values);
    var contact = {
      "contact": {
        "name": values.name,
        "email": values.email,
        "subject": values.subject
      }
    }
    this.props.createContact(contact)  
  }


  render() {
    const { loading , error,
    success} = this.props.contactNew;
    return (
      <section id="contact">
        <div className="row section-intro">
          <div className="col-twelve">

            <h5>Contact</h5>
            <h1>I'd Love To Hear From You.</h1>
          </div>
        </div> 

   	  <div className="row contact-form">
        <div className="col-twelve">
          <ContactForm onSubmit={this.submit} loading= {loading}/>              
          {error && <div id="message-warning">Something went wrong. Please try again. </div>}    
          {success && <div id="message-success">
          <i className="fa fa-check"></i>Your message was sent, thank you!<br/>
        </div>}
        </div> 
      </div> 

      <div className="row contact-info">
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-pin"></i>
          </div>
          <h5>Where to find me</h5>
          <p>
            Club House 201<br/>
            〒305-0033 Ibaraki-ken,<br/>
            Tsukuba-shi, Higashiarai,<br/>
            Japan<br/>
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
          <p>Mobile: (+81) 817 098 3828</p>
        </div>
      </div> 
	  </section>
    )
  }
}

export default Contact;