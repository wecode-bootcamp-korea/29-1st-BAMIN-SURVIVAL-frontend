import React from 'react';
import './Mentor.scss';

const Mentor = () => {
  return (
    <div className="mentor">
      <div className="mentorTitle">
        <p>배민서바이벌을 이끄는</p>
        <span>서바이벌 Mentors</span>
      </div>
      <div className="mentorList">
        <div className="mentor">
          <img
            alt="멘토얼굴"
            src="/images/shinung/chaehyun.jpg"
            className="mentorImage"
          />
          <div className="mentorInfo">
            <span className="mentorName">임채현</span>
            <span className="mentorPosition">Schoolend Mentor</span>
            <p className="mentorText">
              스탠포드 대학교에서 Hammer Artist 전공으로 공부 했으며 보이스카웃,
              중, 고등학교 수련회조교 등 다양한 이벤트에 참가한 경험이 있다.
              오함마와 방독면을 끔찍히도 사랑하며, 학교에서 살아남기 위해 가장
              필요한 역량을 갖춘 학생들을 교육하는데 힘쏟고 있다.
            </p>
          </div>
        </div>
        <div className="mentor">
          <img
            alt="멘토얼굴"
            src="/images/shinung/jihong.jpg"
            className="mentorImage"
          />
          <div className="mentorInfo">
            <span className="mentorName">주지홍</span>
            <span className="mentorPosition">Covidend Mentor</span>
            <p className="mentorText">
              하버드 대학교에서 Survival Science 전공으로 공부 했으며 다수의
              좀비 영화에서 자문 및 액션 감독을 맡았다. 중국 우한 여행 중
              Covid-19가 발생하였고 공안의 강력한 감시와 통제를 뚫고 기적적으로
              탈출하였다. 현재는 수많은 사람들을 Covid로부터 살아남게하기 위해
              끊임없이 노력하고 있다.
            </p>
          </div>
        </div>
        <div className="mentor">
          <img
            alt="멘토얼굴"
            src="/images/shinung/heetaek.jpg"
            className="mentorImage"
          />
          <div className="mentorInfo">
            <span className="mentorName">최희택</span>
            <span className="mentorPosition">Companyend Mentor</span>
            <p className="mentorText">
              서울대학교에서 전차공학과를 졸업하였으며 '전차는 나의 삶'의
              저자이다. K-9으로 세계일주를 성공하여 기네스북에 올랐으며
              실리콘벨리에서 K-9으로 출퇴근을 하며 교통체증을 없애기 위한 노력을
              했다. 전세계의 교통체증을 해결하기 위해 '전차로 출퇴근' 운동을
              오늘도 하고있다.
            </p>
          </div>
        </div>
        <div className="mentor">
          <img
            alt="멘토얼굴"
            src="/images/shinung/shinung.jpg"
            className="mentorImage"
          />
          <div className="mentorInfo">
            <span className="mentorName">한신웅</span>
            <span className="mentorPosition">Communityend Mentor</span>
            <p className="mentorText">
              나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄 이런 젼차로
              어린 백성이 니르고져 할바이셔도 마참내 제 뜻들 시러펴디 몯하 노미
              하니라 내이를 윙하야 어엿비 너겨 새로 스믈여덟자를 망그노니
              사람마다 희여 수이 니겨 날로 쑤매 뼌한킈하고져 할따르미니라
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
