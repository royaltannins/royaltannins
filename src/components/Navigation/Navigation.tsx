import React from 'react';
import './Navigation.scss';
import NavigationLink from './NavigationLink';

interface INavigationProps {

}

const Navigation : React.FC<INavigationProps> = props => {
    return (
        <div className={`navigation flex-row`}>
            <NavigationLink to='/' selected={true} >C’est quoi les RT ?</NavigationLink>
            <NavigationLink to='/evenements' selected={false} >Évènements</NavigationLink>
            <NavigationLink to='/shop' selected={false} >Boutique</NavigationLink>
            <NavigationLink to='/contact' selected={false} >Contact</NavigationLink>
        </div>
    );
}

export default Navigation;