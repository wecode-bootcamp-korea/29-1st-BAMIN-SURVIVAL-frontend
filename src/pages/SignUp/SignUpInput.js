import React, { useState } from 'react';
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
  warning,
}) {
  const [isBlur, setIsBlur] = useState(false);
  const onChange = e => {
    setSignupInfo({
      ...signupInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onBlur = () => {
    setIsBlur(true);
  };

  const onFocus = () => {
    setIsBlur(false);
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
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {isError && isBlur ? (
          <div className="warningShowUp">{warning}</div>
        ) : (
          <div className="warning">{warning}</div>
        )}
        {/* {isMandatory && <div className="mandatory">필수항목입니다</div>} */}
      </div>
    </div>
  );
}

export default SignUpInput;
