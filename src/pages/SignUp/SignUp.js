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

  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isClear, setIsClear] = useState(false);

  const {
    signUpId,
    signUpPw,
    signUpPwCheck,
    signUpEmail,
    signUpNick,
    signUpPhone,
  } = signUpInfo;

  const onChange = e => {
    setSignUpInfo({
      ...signUpInfo,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const isValidId = () => {
    const idRegex = /^[A-Za-z0-9+]{6,16}$/;
    const validId = idRegex.test(signUpId);
    return !validId && signUpId !== '';
  };
  const isValidPw = () => {
    const pwRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    const validPw = pwRegex.test(signUpPw);
    return !validPw && signUpPw !== '';
  };
  const isPwSame = signUpPw !== signUpPwCheck;
  const isPwNotBlank = signUpPw !== '' && signUpPwCheck !== '';
  const isValidPwCheck = isPwSame && isPwNotBlank;

  const isValidEmail = () => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const validEmail = emailRegex.test(signUpEmail);
    return !validEmail && signUpEmail !== '';
  };

  const isValidNick = () => {
    const nickRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
    const validNick = nickRegex.test(signUpNick);
    return !validNick && signUpNick !== '';
  };

  const isValidPhone = value => {
    const phoneRegex = /^[0-9\b -]{0,13}$/;
    const validPhone = phoneRegex.test(value);
    return validPhone && signUpPhone !== '';
  };

  const signUpIdFetch = () => {
    fetch('http://10.58.5.233:8000/users/check-account', {
      method: 'POST',
      body: JSON.stringify({
        account: signUpId,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'ALREADY EXISTS') {
          setIsDuplicate(true);
        }
      });
  };
  const signUpEmailFetch = () => {
    fetch('http://10.58.5.233:8000/users/check-email', {
      method: 'POST',
      body: JSON.stringify({
        email: signUpEmail,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'ALREADY EXISTS') {
          setIsDuplicate(true);
          if (isDuplicate === false) {
            setIsClear(true);
          }
        }
      });
  };

  const signUpNickFetch = () => {
    fetch('http://10.58.5.233:8000/users/check-nickname', {
      method: 'POST',
      body: JSON.stringify({
        nickname: signUpNick,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'ALREADY EXISTS') {
          setIsDuplicate(true);
        }
      });
  };

  const signUpPhoneFetch = () => {
    fetch('http://10.58.5.233:8000/users/check-phone', {
      method: 'POST',
      body: JSON.stringify({
        phone: signUpPhone,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'ALREADY EXISTS') {
          setIsDuplicate(true);
        }
      });
  };

  const signUpFetch = () => {
    fetch('http://10.58.4.21:9090/users/check', {
      method: 'POST',
      body: JSON.stringify({
        account: signUpId,
        password: signUpPw,
        email: signUpEmail,
        phone: signUpPhone,
        nickname: signUpNick,
      }),
    }).then(res => res.json());
  };

  const validator = {
    signUpId: [isValidId(), signUpIdFetch],
    signUpPw: [isValidPw(), 'pw'],
    signUpPwCheck: [isValidPwCheck, 'pwcheck'],
    signUpNick: [isValidNick(), signUpNickFetch],
    signUpEmail: [isValidEmail(), signUpEmailFetch],
    signUpPhone: [isValidPhone(), signUpPhoneFetch],
  };

  const signUpRegister = e => {
    e.preventDefault();
    if (isValidator && isFilledMandatory) {
      alert('경고 문구를 해결해주세요!');
    } else {
      signUpFetch();
      alert('회원가입이 완료되었습니다!');
    }
  };

  const isFilledMandatory = Object.values(signUpInfo).includes('');

  const isValidator = Object.values(validator).includes(true);

  return (
    <div className="signUp">
      <form className="signUpForm" onSubmit={signUpRegister}>
        <header className="signUpHeader">
          <h1 className="info">기본정보</h1>
          <h4 className="sideInfo">
            *표시는 반드시 입력하셔야 하는 필수항목입니다.
          </h4>
        </header>
        <SignUpInputList
          signUpInfo={signUpInfo}
          onChange={onChange}
          validator={validator}
          isDuplicate={isDuplicate}
          setIsDuplicate={setIsDuplicate}
        />
        <div className="signUpButtonWrapper">
          <button className="signUpCancelBtn" onClick={goToLogin}>
            취소
          </button>
          <button className="signUpBtn">회원가입</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
