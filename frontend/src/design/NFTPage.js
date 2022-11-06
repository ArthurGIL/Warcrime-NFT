import React from 'react';
import './StylePage.css';
import Card from './components/Card';

function NFTPage() {
  return (
    //Affichage des cartes avec leurs parametres
    <div className='page'>
        <div className='page-container'>
            <div className='page-wrapper'>
                <ul className='page-items'>
                    <Card src='/pictures/Neil_Armstrong.jpg' text='NFT Neil Armstrong' label='0.1 Goerli ETH' path='/NFT'/>
                    <Card src='/pictures/Buzz_Aldrin.jpg' text='NFT Buzz Aldrin' label='0.075 Goerli ETH' path='/NFT'/>
                </ul>
                <ul className='page-items'>
                    <Card src='/pictures/Conrad.jpg' text='Charles Conrad' label='NAVY' path='/NFT'/>
                    <Card src='/pictures/Alan_bean.jpg' text='Alan Bean' label='NAVY' path='/NFT'/>
                </ul>
                <ul className='page-items'>
                    <Card src='/pictures/Alan_Shepard.jpg' text='Alan Shepard' label='NAVY' path='/NFT'/>
                    <Card src='/pictures/Ed_Mitchell.jpg' text='Edgar Mitchell' label='NAVY' path='/NFT'/>
                </ul>
                <ul className='page-items'>
                    <Card src='/pictures/Dave_Scott.jpg' text='David Scott' label='AIR FORCE' path='/NFT'/>
                    <Card src='/pictures/Jim_Irwin.jpg' text='James Irwin' label='AIR FORCE' path='/NFT'/>
                </ul>
                <ul className='page-items'>
                    <Card src='/pictures/John_Young.jpg' text='John Young' label='NAVY' path='/NFT'/>
                    <Card src='/pictures/Charles_Duke.jpg' text='Charles Duke' label='AIR FORCE' path='/NFT'/>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default NFTPage;
