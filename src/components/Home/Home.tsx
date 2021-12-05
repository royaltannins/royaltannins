import React from 'react';
import './Home.scss';
import logo from './../../images/rt-logo-1.jpeg';
import cup from './../../images/cropped-rt-logo-2.jpeg';
import Link from '../Link/Link';

const Home : React.FC = props => {
    return (
        <div className={`home`}>
            <img src={logo} className={`logo-image`} alt={'Royal Tannins logo'} />

            <p>Le vin. Les copains.</p>
            <br></br>
            <p>Les Royal Tannins, c’est quoi ? <br></br>
                Les RT, ce sont les copains. <br></br>
                Les copains qui aiment partager, rire, vivre ensemble. <br></br>
                Les RT, c’est boire du vin, bien manger, se faire plaisir.</p>

            <img src={cup} className={`cup-image`} alt={'cup image'} />

            <p><br></br>Events &amp; Merch à venir… Stay tuned!</p>
            <p>
                Instagram: <Link url={'https://www.instagram.com/royaltannins/'} text={'@royaltannins'}/>
                <br></br>
                Email: <Link url={'mailto:contact@royaltannins.com'} text={'contact@royaltannins.com'}/>
            </p>
        </div>
    );
}

export default Home;