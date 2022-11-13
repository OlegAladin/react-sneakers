import React from 'react';
import m from './main.module.scss';
import { Route, Routes } from 'react-router-dom';
import Header from "./header/Header";
import Catalog from "./catalog/Catalog";
import Favorite from './favorite/Favorite';
import PurchaseHistory from './purchaseHistory/PurchaseHistory';

const Main = (props) => {
    return (
        <div className={m.main}>
            <Header
                totalPrice={props.totalPrice}
                setCartOpen={props.setCartOpen}
            />
            <Routes>
                <Route path='/' element={
                    <Catalog
                        sneakersCatalog={props.sneakersCatalog}
                        setSneakersCatalog={props.setSneakersCatalog}
                        favoriteList={props.favoriteList}
                        cartList={props.cartList}
                        changeFavoriteList={props.changeFavoriteList}
                        changeCartList={props.changeCartList}
                    />
                } />
                <Route path='favorite' element={
                    <Favorite
                        sneakersCatalog={props.sneakersCatalog}
                        setSneakersCatalog={props.setSneakersCatalog}
                        favoriteList={props.favoriteList}
                        cartList={props.cartList}
                        changeFavoriteList={props.changeFavoriteList}
                        changeCartList={props.changeCartList}
                    />
                } />
                <Route path='account' element={
                    <PurchaseHistory
                        sneakersCatalog={props.sneakersCatalog}
                        setSneakersCatalog={props.setSneakersCatalog}
                        favoriteList={props.favoriteList}
                        changeFavoriteList={props.changeFavoriteList}
                        purchaseList={props.purchaseList}
                    />
                } />
            </Routes>
        </div>
    )
}

export default Main