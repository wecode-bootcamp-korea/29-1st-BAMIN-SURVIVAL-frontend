import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.scss';
import CartList from './CartList';
import TotalAmount from './TotalAmount';
// import BASE_URL from '../Config';

const Cart = () => {
  const [items, setItems] = useState([]);
  const isAllItemChecked = items.every(item => item.is_check);
  const qtyZero = items.filter(item => item.qty === 0);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`${BASE_URL}/cart`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: sessionStorage.setItem('token'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => setItems(res.result));
  // }, []);

  useEffect(() => {
    fetch('/data/Shinung/data.json')
      .then(res => res.json())
      .then(res => setItems(res));
  }, []);

  const deleteCheckedItem = () => {
    const checkedItem = items.filter(item => item.is_check);
    const isUserConfirmDelete = window.confirm(
      `선택하신 ${checkedItem.length}개상품을 장바구니에서 삭제하시겠습니까?`
    );
    if (isUserConfirmDelete) {
      const deleteItem = items.filter(item => item.is_check === false);
      setItems(deleteItem);
    } else return;
  };

  const handleAllCheck = () => {
    const checkedItem = items.filter(item => item.is_check);
    if (checkedItem.length === items.length) {
      setItems(
        items.map(item => {
          return { ...item, is_check: !item.is_check };
        })
      );
    } else if (checkedItem.length <= items.length) {
      setItems(
        items.map(item => {
          return { ...item, is_check: true };
        })
      );
    } else return;
  };

  const checkedItemPurchase = e => {
    e.preventDefault();
    const checkedItem = items.filter(item => item.is_check === true);
    const isUserOrderCheckedItems = window.confirm(
      `선택하신 ${checkedItem.length}개상품만 주문합니다.`
    );
    if (isUserOrderCheckedItems) navigate('/complete');
    else return;
  };

  return (
    <section className="cart">
      <div className="cartHeader">
        <div className="cartTitle">장바구니</div>
        <div className="cartProcess">
          <span className="cartNow">01 장바구니</span>
          <span>
            <i className="fas fa-chevron-right" />
          </span>
          <span className="cartNext">02 주문완료</span>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="cartEmpty">장바구니에 담겨있는 상품이 없습니다.</div>
      ) : (
        <table className="productInfo">
          <thead className="infoHeader">
            <tr>
              <th className="checkTitle">
                <input
                  type="checkbox"
                  onChange={handleAllCheck}
                  checked={isAllItemChecked}
                  disabled={qtyZero.length === items.length && true}
                />
              </th>
              <th />
              <th className="optionTitle">상품 / 옵션 정보</th>
              <th className="countTitle">수량</th>
              <th className="priceTitle">상품금액</th>
              <th className="deliveryTitle">배송비</th>
            </tr>
          </thead>

          <tbody className="productList">
            {items.map((item, idx) => (
              <CartList
                item={item}
                key={item.id}
                idx={idx}
                items={items}
                setItems={setItems}
              />
            ))}
          </tbody>
        </table>
      )}

      <div className="shoppingContinue">
        <i className="fas fa-chevron-left" />
        <span>
          <Link to="/all" className="backMainPage">
            쇼핑 계속하기
          </Link>
        </span>
      </div>

      <TotalAmount items={items} />

      {items.length !== 0 && (
        <div className="controlProduct">
          <div className="choiceProduct">
            <button className="deleteProduct" onClick={deleteCheckedItem}>
              선택 상품 삭제
            </button>
            <button className="likeProduct">선택 상품 찜</button>
          </div>
          <div className="orderProduct">
            <button className="choiceOrder" onClick={checkedItemPurchase}>
              선택 상품 주문
            </button>
            <button
              className="totalOrder"
              onClick={() => {
                navigate('/complete');
              }}
            >
              전체 상품 주문
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
