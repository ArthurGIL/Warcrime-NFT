import './../App.css';
import React from 'react';
import './StylePage.css';
import Afghanistan from './../NFTs/Afghanistan';
import Columbia from './../NFTs/Columbia';
import Ethiopia from './../NFTs/Ethiopia';
import Iraq from './../NFTs/Iraq';
import Mali from './../NFTs/Mali';
import Myanmar from './../NFTs/Myanmar';
import Somali from './../NFTs/Somali';
import Syria from './../NFTs/Syria';
import Ukraine from './../NFTs/Ukraine';
import Yemeni from './../NFTs/Yemeni';

function NFT() {
    return (
        //Affichage des cartes avec leurs parametres
        <div className='page'>
            <div className='page-container'>
                <div className='page-wrapper'>
                    <ul className='page-items'>
                        <Afghanistan/>
                        <Columbia/>
                    </ul>
                    <ul className='page-items'>
                        <Ethiopia/>
                        <Iraq/>
                    </ul>
                    <ul className='page-items'>
                        <Mali/>
                        <Myanmar/>
                    </ul>
                    <ul className='page-items'>
                        <Somali/>
                        <Syria/>
                    </ul>
                    <ul className='page-items'>
                        <Ukraine/>
                        <Yemeni/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NFT;