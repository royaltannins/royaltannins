import React from 'react';
import './Header.scss';
import logo from './../../images/rt-logo-1-red.jpeg';
import Navigation from '../Navigation/Navigation';

const Header : React.FC = props => {
    return (
        <header>
            <img src={logo} className={`logo-image`} alt={'Royal Tannins logo'} />

            <Navigation />
        </header>
    );
}

export default Header;