import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className='options'>
            <Link className='option' to='/'>
                Home
            </Link>
            <Link className='option' to='/vghome'>
                VG
            </Link>
            <Link className='option' to='/tcghome'>
                TCG 
            </Link>
            <Link className='option' to='/about'>
                About
            </Link>
        </div>
    </div>

);

export default Header;