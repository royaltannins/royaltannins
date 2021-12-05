import React from 'react';
import { JsxElement } from 'typescript';
import './SocialLink.scss';

interface ISocialLinkProps {
    url : string;
    icon : JSX.Element;
}

const SocialLink : React.FC<ISocialLinkProps> = props => {
    return (
        <div className={`social-link`}>
            <a href={props.url} target='_blank'>{props.icon}</a>
            <div className={`underline`}></div>
        </div>
        
    );
}

export default SocialLink;