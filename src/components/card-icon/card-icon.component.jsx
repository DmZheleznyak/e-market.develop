import React from 'react';

import shoppingIcon from './../../assets/shopping-bag.svg'

import './card-icon.styles.scss';

const CardIcon = () => (
    <div className='cart-icon'>
        <img className='shopping-icon' src={shoppingIcon} alt='' />
        <span className='item-count'>0</span>
    </div>
)

export default CardIcon;