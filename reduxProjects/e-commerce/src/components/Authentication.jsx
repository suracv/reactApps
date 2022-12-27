import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const Authentication = () => {
  return (
    <div className='authentication-container container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;