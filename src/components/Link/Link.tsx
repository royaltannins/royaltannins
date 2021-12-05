import React from 'react';
import './Link.scss';

interface ILinkProps {
    url : string;
    text : string;
}

const Link : React.FC<ILinkProps> = props => {
    return (
        <div className={`link`}>
            <a href={props.url} target='_blank'>{props.text}</a>
            <div className={`underline`}></div>
        </div>
        
    );
}

export default Link;