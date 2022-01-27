import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpInputList from './SignUpInputList';
import './SignUpBaeminSurvival.scss';

function SignUpBaeminSurvival() {
  const [signupInfo, setSignupInfo] = useState({
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

  const SIGNUP_INPUT_DATA = [
    {
      id: '1',
      type: 'text',
      text: '아이디',
      name: 'signUpId',
      value: signupInfo.signUpId,
    },

    {
      id: '2',
      type: 'password',
      text: '비밀번호',
      name: 'signUpPw',
      value: signupInfo.signUpPw,
    },

    {
      id: '3',
      type: 'password',
      text: '비밀번호확인',
      name: 'signUpPwCheck',
      value: signupInfo.signUpPwCheck,
    },

    {
      id: '4',
      type: 'email',
      text: '이메일',
      name: 'signUpEmail',
      value: signupInfo.signUpEmail,
    },

    {
      id: '5',
      type: 'name',
      text: '닉네임',
      name: 'signUpNick',
      value: signupInfo.signUpNick,
    },

    {
      id: '6',
      type: 'text',
      text: '휴대폰번호',
      placeholder: ' -없이 입력하세요',
      name: 'signUpPhone',
      value: signupInfo.signUpPhone,
    },
  ];

  console.log(signupInfo.signUpPhone);

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
          signup={SIGNUP_INPUT_DATA}
          setSignupInfo={setSignupInfo}
          signupInfo={signupInfo}
        />
        <div className="signUpButtonWrapper">
          <button className="signUpCancelBtn" onClick={goToLogin}>
            취소
          </button>
          <button className="signUpBtn">회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default SignUpBaeminSurvival;
