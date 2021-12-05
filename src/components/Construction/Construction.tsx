import React from 'react';
import './Construction.scss';

const Construction : React.FC = props => {
    return (
        <div className={`construction`}>
            Site en construction
            <div className={`underline flex-row`}>
                <div className={`left`}></div>
                <div className={`right`}></div>
            </div>
        </div>
    );
}

export default Construction;