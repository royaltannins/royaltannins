import React from 'react';
import './Home.scss';
import cup from './../../images/cropped-rt-logo-2.jpeg';
import MyLink from '../Link/MyLink';

const Home : React.FC = props => {
    return (
        <div className={`home`}>
            <p>Le vin. Les copains.</p>
            <br></br>
            <p>Les Royal Tannins, c’est quoi ? <br></br>
                Les RT, ce sont les copains. <br></br>
                Les copains qui aiment partager, rire, vivre ensemble. <br></br>
                Les RT, c’est boire du vin, bien manger, se faire plaisir.</p>

            <img src={cup} className={`cup-image`} alt={'cup image'} />

            <p><br></br>Events &amp; Merch à venir… Stay tuned!</p>
            <p>
                Instagram: <MyLink url={'https://www.instagram.com/royaltannins/'} text={'@royaltannins'}/>
                <br></br>
                Email: <MyLink url={'mailto:contact@royaltannins.com'} text={'contact@royaltannins.com'}/>
            </p>
        </div>
    );
}

export default Home;