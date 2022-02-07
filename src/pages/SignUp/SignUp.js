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

  const {
    signUpId,
    signUpPw,
    signUpPwCheck,
    signUpEmail,
    signUpNick,
    signUpPhone,
  } = signUpInfo;

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const isValidPw = value => {
    let pwRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    return pwRegex.test(value);
  };
  const isPwSame = signUpPw !== signUpPwCheck;

  const isValidEmail = value => {
    let emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return emailRegex.test(value);
  };

  const isValidPhone = value => {
    let phoneRegex = /^[0-9\b -]{0,13}$/;
    return phoneRegex.test(value);
  };

  const isFilledMandatory =
    !signUpId ||
    !signUpPw ||
    !signUpPwCheck ||
    !signUpEmail ||
    !signUpNick ||
    !signUpPhone;

  const signUpValidation = e => {
    e.preventDefault();
    if (isFilledMandatory) {
      alert('필수항목을 입력해주세요!');
    } else if (!isValidPw(signUpPw)) {
      alert(
        '사용불가! 영문자,숫자,특수문자 조합으로 8-16글자 범위로 입력해주세요! '
      );
    } else if (isPwSame) {
      alert('비밀번호와 비밀번호확인은 같아야 합니다.');
    } else if (!isValidEmail(signUpEmail)) {
      alert('올바른 이메일 형식이 아닙니다.');
    } else if (!isValidPhone(signUpPhone)) {
      alert('올바른 전화번호 형식이 아닙니다.');
    }
  };

  const signUpRegister = () => {
    fetch('http://10.58.4.21/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        account: signUpId,
        password: signUpPw,
        email: signUpEmail,
        phone: signUpPhone,
        nickname: signUpNick,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'ACCOUNT ALREADY EXISTS') {
          alert('중복된 아이디입니다!');
        } else if (res.message === 'NICKNAME ALREADY EXISTS') {
          alert('중복된 닉네임입니다!');
        } else if (res.message === 'E-MAIL ALREADY EXISTS') {
          alert('중복된 이메일입니다!');
        } else if (res.message === 'PHONE-NUMBER ALREADY EXISTS') {
          alert('중복된 휴대폰번호입니다!');
        }
      });
  };

  return (
    <div className="signUp">
      <form className="signUpForm" onSubmit={signUpValidation}>
        <header className="signUpHeader">
          <h1 className="info">기본정보</h1>
          <h4 className="sideInfo">
            *표시는 반드시 입력하셔야 하는 항목입니다.
          </h4>
        </header>
        <SignUpInputList
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
      </form>
    </div>
  );
}

export default SignUp;
