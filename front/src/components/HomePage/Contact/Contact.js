import React, {Component} from 'react';
import './Contact.scss';
import * as Yup from "yup";
import { FormContainer, Form, Field} from "ui-form-field";
import Button from '@material-ui/core/Button';
import axios from 'axios';

const schema = Yup.object().shape({
  name: Yup.string().required("Name is requried!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Invalid Email!"),
  message: Yup.string().required("A message is required!")
});

class Contact extends Component{
  constructor(props){
    super(props);
      this.state = {
        form:{
          name: '',
          email: '',
        },
        isSubmitting: false,
        submitSuccess: false,
        submitFailure: false
      }
      this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount(){

  }

  onSubmit = (values) => {
    console.log(values)
      var self = this;
      this.setState({
        isSubmitting: true
      }, ()=>{
        axios.post('/api/v1/submitContact', {values})
          .then(function (response) {
            self.setState({
              submitSuccess: true,
              submitFailure: false,
              isSubmitting: false,
            })

            console.log(response);
          })
          .catch(function (error) {
            self.setState({
              isSubmitting: false,
              submitSuccess: false,
              submitFailure: true
            })
            console.log(error);
          });
      })

  };

  renderForm = (props) => {
    return(
      <Form onChange={this.onChange}>
        <Field name="name" placeholder="Name" />
        <Field name="email" placeholder="Your-Email@email.com"/>
        <Field textarea height='300px'name="message" placeholder="Message"/>
        <Button type="submit" variant={'outlined'} isabled={this.state.isSubmitting} >Submit</Button>
      </Form>
    );
  }

  form = () => {
    return (
      <>
        <h1>Contact Us</h1>
        <FormContainer validationSchema={schema} onSubmit={this.onSubmit} render={this.renderForm}/>
        <div className={`error ${this.state.submitFailure ? 'show' : ''}`}><p >Failure Submiting Contact Info</p><span>x</span></div>
      </>
    )
  }

  submitSuccess = () =>{
    return (
      <>
        <h1>Submit Success</h1>
        <div className="success-text">
          <p>Thank you for your questions!</p>
          <p>We will get back to you as soon as possible</p>
        </div>
      </>
    )
  }

  render(){
    return (
      <div id="contact">
        <div className="container">
          <div>
            <div className={`form-card ${this.state.submitFailure ? '' : 'no-flex'}`}>
              {this.state.submitSuccess ? this.submitSuccess() : this.form()}
            </div>
          </div>
        </div>
     </div>
    );
  }
}

export default Contact;
