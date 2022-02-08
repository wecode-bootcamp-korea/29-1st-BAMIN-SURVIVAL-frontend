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
  isError,
  isMandatory,
  warning,
}) {
  const onChange = e => {
    setSignupInfo({
      ...signupInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="signUpInput">
      <div className="inputTextBox">
        <p className="inputText">{`* ${text}`}</p>
      </div>
      <div className="inputWrapper">
        <input
          className="input"
          name={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          value={value}
        />
        {isError ? <div className="warning">{warning}</div> : null}
        {isMandatory && <div className="mandatory">필수항목입니다</div>}
      </div>
    </div>
  );
}

export default SignUpInput;
