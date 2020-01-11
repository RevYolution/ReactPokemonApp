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
                VG Home Page
            </Link>
            <Link className='option' to='/tcghome'>
                TCG Home Page
            </Link>
        </div>
    </div>

);

export default Header;