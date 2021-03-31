import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/knitting.svg';

import './header.styles.scss';

const nitь = 'NITЬ';

const Header = () => (
    <header className='header'>
        <Link className='logo-container' to='/'>
            <img className='logo' src={logo} alt='logo' />
        </Link>
        <div className='name'>{ nitь }</div>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
        </div>
    </header>
)

export default Header;