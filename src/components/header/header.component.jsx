import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeLogo } from '../../assets/pokemon.svg';
import { ReactComponent as VideoGameLogo } from '../../assets/gameboy.svg';
import { ReactComponent as CardLogo } from '../../assets/camera.svg';
import { ReactComponent as AboutLogo } from '../../assets/pokemon-trainer.svg';


import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='home-logo-container' to='/'>
            <HomeLogo className='logo' />
            Home
        </Link>
        <div className='options'>
            <Link className='option' to='/vghome'>
                <VideoGameLogo />
                Video Games
            </Link>
            <Link className='option' to='/tcghome'>
                <CardLogo />
                Trading Card Game 
            </Link>
            <Link className='option' to='/about'>
                <AboutLogo />
                About
            </Link>
        </div>
    </div>

);

export default Header;