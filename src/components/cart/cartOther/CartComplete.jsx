import React from 'react';
import m from './cartOther.module.scss';
import GreenButton from '../../UI/greenButton/GreenButton';
import complete from './../../../images/order-ready.png';
import { ReactComponent as Arrow } from './../../../images/arrow-left.svg';

const CartComplete = (props) => {
  return (
    <div className={m.container}>
      <div className={m.cartOther}>
        <div className={m.imageBlock}>
          <img src={complete} alt="complete" />
        </div>
        <h2 className={m.green}>Заказ оформлен!</h2>
        <p>Ваш заказ скоро будет передан курьерской доставке.</p>
        <GreenButton className={m.backBtn} onClick={() => { props.setCartOpen(false) }}>
          <Arrow className={m.arrow} />
          <span>Вернуться назад</span>
        </GreenButton>
      </div>
    </div>
  )
}

export default CartComplete;