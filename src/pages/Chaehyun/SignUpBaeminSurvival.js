import React, { useState } from 'react';
import InputList from './InputList';
import './SignUpBaeminSurvival.scss';

const signUpData = [
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

function SignUpBaeminSurvival() {
  return (
    <div className="signUpBaeminSurvival">
      <div className="signUpForm">
        <header className="signUpHeader">
          <h1 className="info">기본정보</h1>
          <h4 className="sideInfo">
            *표시는 반드시 입력하셔야 하는 항목입니다.
          </h4>
        </header>
        <InputList signup={signUpData} />
      </div>
    </div>
  );
}

export default SignUpBaeminSurvival;
