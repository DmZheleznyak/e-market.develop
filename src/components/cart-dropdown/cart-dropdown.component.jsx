import React from 'react';
import CustomButton from './../custom-button/custom-botton.component';

import CustomButtom from './../custom-button/custom-botton.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton className='custom-button'>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;