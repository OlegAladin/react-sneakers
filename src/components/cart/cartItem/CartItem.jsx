import React from 'react';
import m from './cartItem.module.scss';
import { ReactComponent as Delete } from './../../../images/plus.svg';

const CartItem = (props) => {
    const itemInfo = {
        name: props.sneakersCatalog.find(element => element.id === props.id).name,
        price: props.sneakersCatalog.find(element => element.id === props.id).price,
        imgUrl: props.sneakersCatalog.find(element => element.id === props.id).imgUrl
    }

    return (
        <div className={m.cartItem}>
            <div className={m.imageBlock}>
                <img src={itemInfo.imgUrl} alt={itemInfo.name} />
            </div>
            <div className={m.itemInfo}>
                <span className={m.itemName}>{itemInfo.name}</span>
                <span className={m.price}>{itemInfo.price} руб.</span>
            </div>
            <button className={m.deleteBtn} onClick={() => { props.changeCartList(props.id, itemInfo.price) }}>
                <Delete className={m.deleteIcon} />
            </button>
        </div>
    )
}

export default CartItem;