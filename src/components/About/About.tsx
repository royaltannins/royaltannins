import React from 'react';
import './About.scss';

const About : React.FC = props => {
    return (
        <div className={`about`}>
            <h1>À propos des RT</h1>
            <p>Les Royal Tannins, c’est quoi ? <br></br>
                Les RT, ce sont les copains. <br></br>
                Les copains qui aiment partager, rire, vivre ensemble. <br></br>
                Les RT, c’est boire du vin, bien manger, se faire plaisir.
            </p>
        </div>
    );
}

export default About;