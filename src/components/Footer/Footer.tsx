import React from 'react';
import './Footer.scss';

const Footer : React.FC = props => {
    return (
        <footer className={`flex-column`}>
            &copy; 2021
        </footer>
    );
}

export default Footer;