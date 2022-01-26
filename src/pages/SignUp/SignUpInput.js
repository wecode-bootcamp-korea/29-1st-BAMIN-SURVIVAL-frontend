import React from 'react';
import './SignUpInput.scss';

function SignUpInput({ type, text, placeholder }) {
  return (
    <div className="SignUpInput">
      <div className="inputTextBox">
        <p className="inputText">{`* ${text}`}</p>
      </div>
      <div className="inputWrapper">
        <input className="signUpInput" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}

export default SignUpInput;
