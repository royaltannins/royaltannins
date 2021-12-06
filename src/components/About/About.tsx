import React from 'react';
import './About.scss';
import cup from './../../images/cropped-rt-logo-2.jpeg';

const About : React.FC = props => {
    return (
        <div className={`about`}>
            <h1 className={`flex-row`}>
                <img src={cup} alt={`cup image`} />
                À propos des RT
            </h1>

            <div className={`spacer`}></div>
            <p>Au départ, Royal Tannins n’étaient qu’une blague entre copains !</p>
            <p>
                Un jour de décembre, passé la trentaine, quelques gais lurons férus de vins décident de participer à une formation oenologique (WSET1). Une fois celle-ci en poche, ils décident de poursuivre l’aventure en se réunissant pour découvrir des vins d’ici et d’ailleurs, sans prétention, toujours guidés par la simple soif de découverte !
            </p>
            <p>
                Au fil du temps, l’un d’entre eux les surnomment les Royal Tannins, puis l’idée germe dans leur tête : et si on pouvait réunir des amateurs de vins, de tous horizons, pour réaliser des activités autour de cette passion ?
                <br></br>
                C’est alors que l’aventure a débuté et que les Royal Tannins sont nés.
            </p>
            <p>
                Les Royal Tannins ont pour but de découvrir des pépites viticoles par le biais de dégustations, axées sur des thèmes ciblés, dans une multitude de lieux, ainsi que de rencontrer tout.e.s ces femmes et hommes qui participent à la confection de breuvage (cavistes, vignerons, artisans, etc.).
            </p>
            <p>
                Amateurs de vins blancs, rouges, rosés, jaunes, de paille, champagnes, venez découvrir le monde du vin avec simplicité et convivialité, en ayant l’envie de partager des bons moments autour de vrais produits à boire et à manger.
            </p>
            <p>
                N’hésitez pas à nous contacter pour en savoir plus.
            </p>
            <div className={`spacer`}></div>
            <p className={`right`}>
                - <i>Les Royal Tannins.</i>
            </p>
        </div>
    );
}

export default About;