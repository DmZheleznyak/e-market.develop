import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from './../../redux/cart/cart.actions';

import shoppingIcon from './../../assets/shopping-bag.svg'

import './card-icon.styles.scss';

const CardIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <img className='shopping-icon' src={shoppingIcon} alt='' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch( toggleCartHidden() )
})

export default connect( null, mapDispatchToProps )( CardIcon );