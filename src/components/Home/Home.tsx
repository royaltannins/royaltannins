import React from 'react';
import './Home.scss';
import cup from './../../images/cropped-rt-logo-2.jpeg';
import SocialLink from '../SocialLink/SocialLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Home : React.FC = props => {
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const mail = <FontAwesomeIcon icon={faEnvelope} />

    return (
        <div className={`home`}>
            <img src={cup} className={`cup-image`} alt={'cup image'} />
            <p>Le vin. Les copains.</p>
            <br></br>
            <p>Les Royal Tannins, c’est quoi ? <br></br>
                Les RT, ce sont les copains. <br></br>
                Les copains qui aiment partager, rire, vivre ensemble. <br></br>
                Les RT, c’est boire du vin, bien manger, se faire plaisir.</p>


            <p><br></br>Events &amp; Merch à venir… Stay tuned!</p>
            
            <div className={`social flex-row`}>
                <SocialLink url={'https://www.instagram.com/royaltannins/'} icon={instagram}/>
                <SocialLink url={'mailto:contact@royaltannins.com'} icon={mail}/>
            </div>
        </div>
    );
}

export default Home;