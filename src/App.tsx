import React from 'react';
import './App.scss';
import logo from './images/rt-logo-1.jpeg';
import cup from './images/cropped-rt-logo-2.jpeg';

const App : React.FC = props => {

    return (
    <div className="App">
        <header>
            Site en construction
        </header>
        
        <img src={logo} className={`logo-image`}/>

        <p>Le vin. Les copains.</p>
        <br></br>
        <p>Les Royal Tannins, c’est quoi ? <br></br>
            Les RT, ce sont les copains. <br></br>
            Les copains qui aiment partager, rire, vivre ensemble. <br></br>
            Les RT, c’est boire du vin, bien manger, se faire plaisir.</p>

        <img src={cup} className={`cup-image`}/>

        <p>Events &amp; Merch à venir… Stay tuned!</p>
        <p>Instagram: @royaltannins<br></br>
            Email: contact@royaltannins.com</p>

            
        <footer></footer>
    </div>
    );
}

export default App;