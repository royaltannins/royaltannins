import React from 'react';
import MyLink from '../Link/MyLink';
import './Contact.scss';

const Contact : React.FC = props => {
    return (
        <div className={`contact`}>
            Instagram: <MyLink url={'https://www.instagram.com/royaltannins/'} text={'@royaltannins'}/>
            <br></br>
            Email: <MyLink url={'mailto:contact@royaltannins.com'} text={'contact@royaltannins.com'}/>
        </div>
    );
}

export default Contact;