import React from 'react';
import m from './../main.module.scss';
import CatalogCardPurchased from '../catalog/catalogCard/catalogCardPurchased/CatalogCardPurchased';
import PurchaseHistoryEmpty from './purchaseHistoryEmpty/PurchaseHistoryEmpty';

const PurchaseHistory = (props) => {
    return (
        <div className={m.catalog}>
            <div className={m.header}>
                <h1>Мои закладки</h1>
            </div>
            {
                props.purchaseList.length === 0
                    ? <PurchaseHistoryEmpty />
                    : <div className={m.catalogBlock}>
                        {
                            props.purchaseList.map(item =>
                                <CatalogCardPurchased
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

export default PurchaseHistory;