import React from 'react';
import SocialLink from '../SocialLink/SocialLink';
import './Contact.scss';
import insta from '../../images/insta.png';
import mail from '../../images/mail.png';

const Contact : React.FC = props => {
    return (
        <div className={`social flex-row`}>
            <SocialLink url={'https://www.instagram.com/royaltannins/'} icon={insta}/>
            <SocialLink url={'mailto:contact@royaltannins.com'} icon={mail}/>
        </div>
    );
}

export default Contact;