import React, { useMemo, useState } from 'react';
import m from './../main.module.scss';
import CatalogCard from './catalogCard/CatalogCard';

const Catalog = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const filteredCatalog = useMemo(() => {
        if (searchValue === '') {
            return props.sneakersCatalog;
        } else {
            return props.sneakersCatalog.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        }
    }, [searchValue, props.sneakersCatalog]);

    return (
        <div className={m.catalog}>
            <div className={m.header}>
                <h1>Все кроссовки</h1>
                <input
                    className={m.search}
                    type="text"
                    placeholder='Поиск...'
                    value={searchValue}
                    onChange={(e) => { setSearchValue(e.target.value) }}
                />
            </div>
            <div className={m.catalogBlock}>
                {
                    filteredCatalog.map(item =>
                        <CatalogCard
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            imgUrl={item.imgUrl}
                            favoriteList={props.favoriteList}
                            changeFavoriteList={props.changeFavoriteList}
                            cartList={props.cartList}
                            changeCartList={props.changeCartList}
                            key={item.id}
                        />)
                }
            </div>
        </div>
    )
}

export default Catalog;