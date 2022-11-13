import React from 'react';
import { Link } from 'react-router-dom';
import m from './../../empty.module.scss';
import GreenButton from '../../../UI/greenButton/GreenButton';
import smile from './../../../../images/smile-2.png';
import { ReactComponent as Arrow } from './../../../../images/arrow-left.svg';

const FavoriteEmpty = () => {
    return (
        <div className={m.empty}>
            <div className={m.emptyBlock}>
                <div className={m.imageBlock}>
                    <img src={smile} alt="sad-smile" />
                </div>
                <h2>Закладок нет :(</h2>
                <p>Вы ничего не добавляли в закладки</p>
                <Link to='/'>
                    <GreenButton className={m.backBtn}>
                        <Arrow className={m.arrow} />
                        <span>Вернуться назад</span>
                    </GreenButton>
                </Link>
            </div>
        </div>
    )
}

export default FavoriteEmpty;