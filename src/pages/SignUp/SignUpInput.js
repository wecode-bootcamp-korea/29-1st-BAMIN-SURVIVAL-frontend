import React from 'react';
import './SignUpInput.scss';

function SignUpInput({
  type,
  signupInfo,
  value,
  text,
  placeholder,
  setSignupInfo,
  name,
}) {
  const onChange = e => {
    setSignupInfo({
      ...signupInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="SignUpInput">
      <div className="inputTextBox">
        <p className="inputText">{`* ${text}`}</p>
      </div>
      <div className="inputWrapper">
        <input
          className="signUpInput"
          name={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
  );
}

export default SignUpInput;
