import './../App.css';
import './HomePage.css';
import React from 'react';

function Home() {
    return (
        //creation de la banniere d'acceuil en "hero" (image/video en plein ecran avec texte)
        <div className='hero-container'>
            <video src='/pictures/video.mp4' autoPlay loop muted />
            <h1>WARCRIME</h1>
            <p>Arthur Gil - Callixte Fusier - Pierre-Erwan Fouillard</p>
        </div>
    );
}

export default Home;