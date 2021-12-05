import React from 'react';
import './MyLink.scss';

interface IMyLinkProps {
    url : string;
    text : string;
}

const MyLink : React.FC<IMyLinkProps> = props => {
    return (
        <div className={`link`}>
            <a href={props.url} target='_blank'>{props.text}</a>
            <div className={`underline`}></div>
        </div>
        
    );
}

export default MyLink;