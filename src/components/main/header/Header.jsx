import React from 'react';
import m from './header.module.scss';
import { Link } from 'react-router-dom';
import logo from './../../../images/logo.png';
import { ReactComponent as Cart } from './../../../images/cart.svg';
import { ReactComponent as Favorite } from './../../../images/favorite.svg';
import { ReactComponent as UserCabinet } from './../../../images/user.svg';

const Header = (props) => {
    return (
        <div className={m.header}>
            <div className={m.logoBlock}>
                <Link to='/'>
                    <div className={m.logo}>
                        <img src={logo} alt='logo' />
                    </div>
                </Link>
                <div className={m.textBlock}>
                    <Link to='/'>
                        <span className={m.name}>REACT SNEAKERS</span>
                    </Link>
                    <span className={m.slogan}>Магазин лучших кроссовок</span>
                </div>
            </div>
            <div className={m.menuBlock}>
                <div className={m.cart} onClick={() => { props.setCartOpen(true) }}>
                    <Cart className={m.cartImage} title='Корзина' />
                    <span className={m.price}>{props.totalPrice} руб.</span>
                </div>
                <Link to='/favorite'>
                    <Favorite className={m.favorite} title='Закладки' />
                </Link>
                <Link to='/account'>
                    <UserCabinet className={m.userCabinet} title='Покупки' />
                </Link>
            </div>
        </div>
    )
};

export default Header;