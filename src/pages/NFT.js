import './../App.css';
import React from 'react';
import './StylePage.css';
import API_1 from '../API/API_1';
import API_2 from '../API/API_2';
import API_3 from '../API/API_3';
import API_4 from '../API/API_4';
import API_5 from '../API/API_5';
import API_6 from '../API/API_6';
import API_7 from '../API/API_7';
import API_8 from '../API/API_8';
import API_9 from '../API/API_9';
import API_10 from '../API/API_10';

function NFT() {
    return (
        //Affichage des cartes avec leurs parametres
        <div className='page'>
            <div className='page-container'>
                <div className='page-wrapper'>
                    <ul className='page-items'>
                        <API_1/>
                        <API_2/>
                    </ul>
                    <ul className='page-items'>
                        <API_3/>
                        <API_4/>
                    </ul>
                    <ul className='page-items'>
                        <API_5/>
                        <API_6/>
                    </ul>
                    <ul className='page-items'>
                        <API_7/>
                        <API_8/>
                    </ul>
                    <ul className='page-items'>
                        <API_9/>
                        <API_10/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NFT;