import React from 'react';
import './App.scss';
import Construction from './components/Construction/Construction';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

const App : React.FC = props => {

    return (
    <div className="App">
        <Construction />
        <Home />
        <Footer />
    </div>
    );
}

export default App;
