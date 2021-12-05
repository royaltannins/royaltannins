import React from 'react';
import SocialLink from '../SocialLink/SocialLink';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Contact : React.FC = props => {
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const mail = <FontAwesomeIcon icon={faEnvelope} />

    return (
        <div className={`social flex-row`}>
            <SocialLink url={'https://www.instagram.com/royaltannins/'} icon={instagram}/>
            <SocialLink url={'mailto:contact@royaltannins.com'} icon={mail}/>
        </div>
    );
}

export default Contact;