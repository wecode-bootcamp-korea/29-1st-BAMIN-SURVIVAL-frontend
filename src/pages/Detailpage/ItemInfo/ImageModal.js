import React from 'react';
import './ImageModal.scss';

const ImageModal = ({ itemName, itemImg, modal, toggleModal }) => {
  return (
    <div className="modalWrraper">
      {modal && (
        <div className="modalBox">
          <div className="overlayBackground" />
          <div className="modalContent">
            <h4 className="modalTitle">
              <span className="modalInfo">이미지 확대보기</span>
              <span className="modalProductName">{itemName}</span>
            </h4>
            <img alt="제품이미지" className="modalProductImg" src={itemImg} />
            <button className="closeModalBtn" onClick={toggleModal}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
