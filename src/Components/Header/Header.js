import React from 'react';
import logo from '../../img/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" className='Logo' />
            <h1>Fitness Club</h1>
        </div>
    );
};

export default Header;