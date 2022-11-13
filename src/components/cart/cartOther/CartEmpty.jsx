import React from 'react';
import m from './cartOther.module.scss';
import GreenButton from '../../UI/greenButton/GreenButton';
import emptyBox from './../../../images/empty-box.jpg';
import { ReactComponent as Arrow } from './../../../images/arrow-left.svg';

const CartEmpty = (props) => {
  return (
    <div className={m.container}>
      <div className={m.cartOther}>
        <div className={m.imageBlock}>
          <img src={emptyBox} alt="empty" />
        </div>
        <h2>Корзина пустая</h2>
        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
        <GreenButton className={m.backBtn} onClick={() => { props.setCartOpen(false) }}>
          <Arrow className={m.arrow} />
          <span>Вернуться назад</span>
        </GreenButton>
      </div>
    </div>
  )
}

export default CartEmpty;