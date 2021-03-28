import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/knitting.svg';
import logo from '../../assets/knitting.svg';

import './header.styles.scss';

const Header = () => (
    <header className='header'>
        <Link className='logo-container' to='/'>
            {/* <Logo className='logo' /> */}
            <img className='logo' src={logo} alt='logo' />
        </Link>
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