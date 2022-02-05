import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Cart.scss';
import CartList from './CartList';
import TotalAmount from './TotalAmount';

const Cart = () => {
  const [items, setItems] = useState([]);
  const checkedItem = items.filter(item => item.is_check === true);

  useEffect(() => {
    fetch('http://localhost:3000/data/Shinung/data.json')
      .then(res => res.json())
      .then(result => setItems(result));
  }, []);

  const onDelete = () => {
    if (
      window.confirm(
        `선택하신 ${checkedItem.length}개상품을 장바구니에서 삭제하시겠습니까?`
      )
    ) {
      const deleteItem = items.filter(item => item.is_check === false);
      setItems(deleteItem);
    } else return;
  };

  return (
    <section className="cart">
      <div className="cartHeader">
        <div className="cartTitle">장바구니</div>
        <div className="cartProcess">
          <span className="ProcessNow">01 장바구니</span>
          <span>
            <i className="fas fa-chevron-right" />
          </span>
          <span className="orderComplete">02 주문완료</span>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="cartEmpty">장바구니에 담겨있는 상품이 없습니다.</div>
      ) : (
        <table className="productInfo">
          <thead className="infoHeader">
            <tr>
              <th className="checkTitle">
                <input type="checkbox" />
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
            <button className="deleteProduct" onClick={onDelete}>
              선택 상품 삭제
            </button>
            {/* <button className="likeProduct">선택 상품 찜</button> */}
          </div>
          <div className="orderProduct">
            <button className="choiceOrder">선택 상품 주문</button>
            <button className="totalOrder">전체 상품 주문</button>
          </div>
        </div>
      )}

      <Footer />
    </section>
  );
};

export default Cart;
