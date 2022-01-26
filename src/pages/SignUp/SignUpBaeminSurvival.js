import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputList from './InputList';
import './SignUpBaeminSurvival.scss';

function SignUpBaeminSurvival() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
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
        <InputList signup={SIGNUP_INPUT_DATA} />
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

const SIGNUP_INPUT_DATA = [
  {
    id: '1',
    type: 'text',
    text: '아이디',
  },

  {
    id: '2',
    type: 'password',
    text: '비밀번호',
  },

  {
    id: '3',
    type: 'password',
    text: '비밀번호확인',
  },

  {
    id: '4',
    type: 'email',
    text: '이메일',
  },

  {
    id: '5',
    type: 'name',
    text: '닉네임',
  },

  {
    id: '6',
    type: 'text',
    text: '휴대폰번호',
    placeholder: ' -없이 입력하세요',
  },
];
