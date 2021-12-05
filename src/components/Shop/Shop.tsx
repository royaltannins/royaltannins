import React from 'react';
import Construction from '../Construction/Construction';
import './Shop.scss';

const Shop : React.FC = props => {
    return (
        <div className={`shop`}>
            <Construction />
        </div>
    );
}

export default Shop;