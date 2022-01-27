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
  // const [signUpId, setSignUpId] = useState('');
  // const [signUpPw, setSignUpPw] = useState('');
  // const [signUpPwCheck, setSignUpPwCheck] = useState('');
  // const [signUpEmail, setSignUpEmail] = useState('');
  // const [signUpNick, setSignUpNick] = useState('');

  // const handleSignUpId = e => {
  //   setSignUpId(e.target.value);
  // };

  // const handleSignUpPw = e => {
  //   setSignUpPw(e.target.value);
  // };

  // const handleSignUpPwCheck = e => {
  //   setSignUpPwCheck(e.target.value);
  // };

  // const handleSignUpEmail = e => {
  //   setSignUpEmail(e.target.value);
  // };

  // const handleSignUpNick = e => {
  //   setSignUpNick(e.target.value);
  // };

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
