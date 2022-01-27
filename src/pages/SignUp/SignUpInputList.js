import React from 'react';
import SignUpInput from './SignUpInput';
import './SignUpInputList.scss';

function SignUpInputList({ signup, signupInfo, setSignupInfo }) {
  return (
    <div className="signUpBox">
      {signup.map(data => (
        <SignUpInput
          type={data.type}
          text={data.text}
          key={data.id}
          name={data.name}
          value={data.value}
          signupInfo={signupInfo}
          placeholder={data.placeholder}
          setSignupInfo={setSignupInfo}
        />
      ))}
    </div>
  );
}

export default SignUpInputList;
