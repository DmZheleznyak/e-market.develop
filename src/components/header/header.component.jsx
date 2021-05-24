import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../assets/knitting.svg';

import { auth } from './../../firebase/firebase.utils';

import CardIcon from './../card-icon/card-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const nitь = 'NITЬ';

const Header = ({ currentUser, hidden }) => (
    <header className='header'>
        <Link className='logo-container' to='/'>
            <img className='logo' src={logo} alt='logo' />
        </Link>
        <div className='name'>{ nitь }</div>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                    ( <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> )
                :
                ( <Link className='option' to='/signin'>SIGN IN</Link> )
            }
            <CardIcon />
        </div>
        { hidden ? null : <CartDropdown /> }
    </header>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);