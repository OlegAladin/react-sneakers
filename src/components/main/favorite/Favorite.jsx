import React from 'react';
import m from './../main.module.scss';
import CatalogCard from '../catalog/catalogCard/CatalogCard';
import FavoriteEmpty from './favoriteEmpty/FavoriteEmpty';

const Favorite = (props) => {
    return (
        <div className={m.catalog}>
            <div className={m.header}>
                <h1>Мои закладки</h1>
            </div>
            {
                props.favoriteList.length === 0
                    ? <FavoriteEmpty />
                    : <div className={m.catalogBlock}>
                        {
                            props.favoriteList.map(item =>
                                <CatalogCard
                                    id={props.sneakersCatalog.find(element => element.id === item).id}
                                    name={props.sneakersCatalog.find(element => element.id === item).name}
                                    price={props.sneakersCatalog.find(element => element.id === item).price}
                                    imgUrl={props.sneakersCatalog.find(element => element.id === item).imgUrl}
                                    favoriteList={props.favoriteList}
                                    changeFavoriteList={props.changeFavoriteList}
                                    cartList={props.cartList}
                                    changeCartList={props.changeCartList}
                                    key={props.sneakersCatalog.find(element => element.id === item).id}
                                />)
                        }
                    </div>
            }
        </div>
    )
}

export default Favorite;