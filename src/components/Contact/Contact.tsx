import React from 'react';
import SocialLink from '../SocialLink/SocialLink';
import './Contact.scss';
import insta from '../../images/insta.png';
import mail from '../../images/mail.png';
import ContactDetails from './ContactDetails';

const Contact : React.FC = props => {
    return (
        <div className={`contact flex-column`}>
            <p>N’hésitez pas à nous contacter pour en savoir plus.</p>

            <div className={`grid-container`}>
                <div className={`item`}>
                    <SocialLink url={'https://www.instagram.com/royaltannins/'} icon={insta} />
                </div>
                <ContactDetails url={'https://www.instagram.com/royaltannins/'} >
                    @royaltannins
                </ContactDetails>
                <div className={`item`}>
                    <SocialLink url={'mailto:contact@royaltannins.com'} icon={mail} />
                </div>
                <ContactDetails url={'mailto:contact@royaltannins.com'} animationDelay='.8s'>
                    contact@royaltannins.com
                </ContactDetails>
            </div>
        </div>
    );
}

export default Contact;