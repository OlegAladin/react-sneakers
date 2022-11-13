import React, { useState } from 'react';
import m from './cart.module.scss';
import CartItem from './cartItem/CartItem';
import CartEmpty from './cartOther/CartEmpty';
import CartComplete from './cartOther/CartComplete';
import GreenButton from '../UI/greenButton/GreenButton';
import { ReactComponent as Arrow } from './../../images/arrow-right.svg';
import { ReactComponent as BackArrow } from './../../images/arrow-black.svg';

const Cart = (props) => {
    const [complete, setComplete] = useState(false);

    const buy = () => {
        setComplete(true);
        props.addToPurchaseList();
    };

    return (
        <div className={props.cartOpen ? `${m.cart} ${m.cartActive}` : `${m.cart}`} onClick={() => { props.setCartOpen(false) }}>
            <div className={props.cartOpen ? `${m.cartBlock} ${m.cartBlockActive}` : `${m.cartBlock}`} onClick={(e) => { e.stopPropagation() }}>
                <div className={m.header}>
                    <BackArrow className={m.backArrow} onClick={() => { props.setCartOpen(false) }} />
                    <h2>Корзина</h2>
                </div>
                {
                    props.cartList.length !== 0
                        ? <>
                            <div className={m.cartList}>
                                {
                                    props.cartList.map(item =>
                                        <CartItem
                                            id={item}
                                            sneakersCatalog={props.sneakersCatalog}
                                            changeCartList={props.changeCartList}
                                            key={item}
                                        />)
                                }
                            </div>
                            <div className={m.totalBlock}>
                                <div className={m.totalStroke}>
                                    <span className={m.totalText}>Итого:</span>
                                    <div className={m.dots}></div>
                                    <span className={m.price}>{props.totalPrice} руб.</span>
                                </div>
                                <div className={m.totalStroke}>
                                    <span className={m.totalText}>Налог 5%:</span>
                                    <div className={m.dots}></div>
                                    <span className={m.price}>{Math.floor(props.totalPrice - (props.totalPrice * 0.95))} руб.</span>
                                </div>
                                <GreenButton className={m.buyBtn} onClick={buy}>
                                    <span>Оформить заказ</span>
                                    <Arrow className={m.arrow} />
                                </GreenButton>
                            </div>
                        </>
                        : complete
                            ? <CartComplete setCartOpen={props.setCartOpen} />
                            : <CartEmpty setCartOpen={props.setCartOpen} />
                }
            </div>
        </div >
    )
}

export default Cart;