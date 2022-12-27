import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../assets/utils/firebase/firebase.utils';
import { useState} from 'react';
import FormInput from './FormInput';

const defaultFormFields = {
  email: '',
  password: '',

};

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

try{

  resetFormFields();

}catch(error){

}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="container ">
      <h1>Sign In Page</h1>
      <form onSubmit={handleSubmit} className="sign-up-container">

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

    <div className="row justify-content-center">
    <button className="btn btn-secondary col-md-5 " type='submit'>Sign In</button>
    <button className="btn  btn-primary col-md-5 ms-3" onClick={logGoogleUser}>Sign in with Google Popup</button>

    </div>
      </form>
    </div>
  );
};

export default SignIn;