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

            <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>

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