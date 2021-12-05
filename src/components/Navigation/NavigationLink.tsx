import React from 'react';
import './NavigationLink.scss';
import { Link, useLocation, matchPath } from 'react-router-dom';

interface INavigationLinkProps {
    to : string;
    selected : boolean;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    const { pathname } = useLocation();
    const selectedClassName = matchPath( pathname, props.to ) ? 'selected' : '';

    return (
        <Link className={`navigation-link ${selectedClassName}`} to={props.to}>
            {props.children}
        </Link>
    );
}

export default NavigationLink;