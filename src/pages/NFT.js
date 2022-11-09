import './../App.css';
import React from 'react';
import './StylePage.css';
import API from '../API/API';

function NFT() {
    return (
        //Affichage des cartes avec leurs parametres
        <div className='page'>
            <div className='page-container'>
                <div className='page-wrapper'>
                    <API/>
                </div>
            </div>
        </div>
    );
}

export default NFT;