import React from 'react';
import m from './catalogCard.module.scss';
import { ReactComponent as Favorite } from './../../../../images/favorite.svg';
import { ReactComponent as FavoriteColored } from './../../../../images/favorite-on-card-colored.svg';
import { ReactComponent as Plus } from './../../../../images/plus.svg';
import { ReactComponent as ChekMark } from './../../../../images/chek-mark.svg';

const CatalogCard = (props) => {
    return (
        <div className={m.catalogCard}>
            <div className={m.imageBlock}>
                <button
                    className={props.favoriteList.includes(props.id) ? `${m.favoriteBtnActive}` : `${m.favoriteBtn}`}
                    onClick={() => { props.changeFavoriteList(props.id) }}
                    title="Добавить в избранное"
                >
                    {
                        props.favoriteList.includes(props.id)
                            ? <FavoriteColored />
                            : <Favorite className={m.favoriteIcon} />
                    }
                </button>
                <img src={props.imgUrl} alt={props.name} />
            </div>
            <div className={m.name}>{props.name}</div>
            <div className={m.bottomBlock}>
                <div className={m.priceBlock}>
                    <span className={m.priceText}>ЦЕНА:</span>
                    <span className={m.price}>{props.price} руб.</span>
                </div>
                <button
                    className={props.cartList.includes(props.id) ? `${m.addBtnActive}` : `${m.addBtn}`}
                    onClick={() => { props.changeCartList(props.id, props.price) }}
                    title="Добавить в корзину"
                >
                    {
                        props.cartList.includes(props.id)
                            ? <ChekMark />
                            : <Plus className={m.plusIcon} />
                    }
                </button>
            </div>
        </div>
    )
}

export default CatalogCard;