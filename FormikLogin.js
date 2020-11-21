import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Formik, Field, Form } from 'formik';

const Basic = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
       initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }} 
    > 
     <Form>
       <label htmlFor="firstName">First Name</label>
       <Field id="firstName" name="firstName" placeholder="Muffin"/>
       <br></br>
       <label htmlFor="lastName">Last Name</label>
       <Field id="lastname" name="lastname" placeholder="Amore"/>
     </Form>

    </Formik>
  </div>
);


ReactDOM.render(
  <Basic />,
  document.getElementById('root')
);
