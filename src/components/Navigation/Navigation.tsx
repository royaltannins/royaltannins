import React from 'react';
import Line from '../Line/Line';
import './Navigation.scss';
import NavigationLink from './NavigationLink';

interface INavigationProps {

}

const Navigation : React.FC<INavigationProps> = props => {
    return (
        <div className={`navigation flex-row`}>
            <NavigationLink to='/' selected={true} >Accueil</NavigationLink>
            <NavigationLink to='/about' selected={true} >À propos des RT</NavigationLink>
            <NavigationLink to='/evenements' selected={false} >Évènements</NavigationLink>
            <NavigationLink to='/shop' selected={false} >Boutique</NavigationLink>
            <NavigationLink to='/contact' selected={false} >Contact</NavigationLink>
            <div className={`lines`}>
                <Line isRed={false} />
                <Line isRed={true} />
            </div>
        </div>
    );
}

export default Navigation;