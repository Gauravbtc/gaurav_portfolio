import React ,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'This Field is Required')

const renderField = ({input,label,type,meta: { touched, error }}) =>
  <div>
    <div>
      <input {...input} placeholder={label} type={type} required="" />
      {touched &&
        ((error &&
          <label>
            {error}
          </label>))}
    </div>
  </div>

class ContactForm extends Component{
  render(){
    const { handleSubmit, loading } = this.props
    console.log(loading);

    return(
      <form name="contactForm" id="contactForm" onSubmit={ handleSubmit }>
          <fieldset>
            <div className="form-field">
              <Field name="name" component={renderField} type="text" id="contactName" label ="Name " value="" minLength="2" validate= {[required]}/>
            </div>
            <div className="form-field">
              <Field name="email" component={renderField} type="email" id="contactEmail" label="Email " value="" validate={[required]}/>
            </div>
            <div className="form-field">
              <Field name="subject" component={renderField} type="text" id="contactSubject" label="Subject " validate={[required]}/>
            </div>
            <div className="form-field">
                <Field name="body" component="textarea" id="contactMessage" label="message " rows="10" placeholder="Message"  cols="50" validate={[required]}/>
            </div>
            <div className="form-field">
              <button className="submitform">Submit</button>
              {loading && 
              <div id="submit-loader">
                <div className="text-loader">Sending...</div>
                <div className="s-loader">
                  <div className="bounce1"></div>
                  <div className="bounce2"></div>
                  <div className="bounce3"></div>
                </div>
              </div>
              }
             </div>
          </fieldset>
        </form>
       )
  }
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'ContactForm',

})(ContactForm)

export default  ContactForm;