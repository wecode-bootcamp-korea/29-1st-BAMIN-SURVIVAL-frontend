import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpInputList from './SignUpInputList';
import './SignUp.scss';

function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({
    signUpId: '',
    signUpPw: '',
    signUpPwCheck: '',
    signUpEmail: '',
    signUpNick: '',
    signUpPhone: '',
  });

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const signUpRegister = () => {
    fetch('http://10.58.5.43/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        account: signUpInfo.signUpId,
        password: signUpInfo.signUpPw,
        email: signUpInfo.signUpEmail,
        phone: signUpInfo.signUpPhone,
        nickname: signUpInfo.signUpNick,
      }),
    }).then(res => res.json());
  };

  return (
    <div className="signUpBaeminSurvival">
      <div className="signUpForm">
        <header className="signUpHeader">
          <h1 className="info">기본정보</h1>
          <h4 className="sideInfo">
            *표시는 반드시 입력하셔야 하는 항목입니다.
          </h4>
        </header>
        <SignUpInputList
          // signup={SIGNUP_INPUT_DATA}
          setSignupInfo={setSignUpInfo}
          signupInfo={signUpInfo}
        />
        <div className="signUpButtonWrapper">
          <button className="signUpCancelBtn" onClick={goToLogin}>
            취소
          </button>
          <button className="signUpBtn" onClick={signUpRegister}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
