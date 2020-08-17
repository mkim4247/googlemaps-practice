import React from 'react'
import SignupFormContainer from './SignupFormContainer'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Signup = props => {
    // const [firstName, setFirstName] = React.useState('');
    // const [lastName, setLastName] = React.useState('');
    // const [email, setEmail] = React.useState('');
    // const [phoneNumber, setPhoneNumber] = React.useState('');
    // const [companyName, setCompanyName] = React.useState('');
    // const [accountingEmail, setAccountingEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');

    // <SignupFormContainer 
    // firstName={firstName}
    // setFirstName={setFirstName}
    // lastname={lastName}
    // setLastName={setLastName}
    // firstName={firstName}
    // setFirstName={setFirstName}
    // lastname={lastName}
    // setLastName={setLastName}
    // firstName={firstName}
    // setFirstName={setFirstName}
    // lastname={lastName}
    // setLastName={setLastName}
    // firstName={firstName}
    // setFirstName={setFirstName}
    // lastname={lastName}
    // setLastName={setLastName}
    // />

    return(
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    companyName: '',
                    accountingEmail: '',
                    password: ''
                }}
                validate={values => {
                    const errors = {};
                    if(!values.email){
                        errors.email = 'Required';
                    } 
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="firstName" name="firstName" />
                        <ErrorMessage name="firstName" component="div" />
                        <Field type="lastName" name="lastName" />
                        <ErrorMessage name="lastName" component="div" />
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <Field type="phoneNumber" name="phoneNumber" />
                        <ErrorMessage name="phoneNumber" component="div" />
                        <Field type="companyName" name="companyName" />
                        <ErrorMessage name="companyName" component="div" />
                        <Field type="accountingEmail" name="accountingEmail" />
                        <ErrorMessage name="accountingEmail" component="div" />
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Signup