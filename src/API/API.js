import React, { Component } from 'react';
import Frame from '../components/Frame';
import APIdata from './APIdata.json';

// PROBLEMATIQUE RENCONTREE
// Nous voulions appeler l'API de opensea mais il y a une limite au nombre de requetes possible ce qui pose problème pour charger les data.
// Nous vouilons donc utiliser la version par collection pour réaliser un seul appel mais nous n'arrivions pas à récupérer les données pour une raison obscure.
// Nous utilisons donc une version locale du fichier JSON de l'API de notre collection de NFT.


// const API_URL1 = "https://testnets-api.opensea.io/api/v1/asset/0xF71e5a9bB9863909F7Ed5cAfFEc8c86c4bB8f8FC/1/?account_address=0xd23e8525548bC55C2E81c78f505f7147E0B4265E";

class API extends Component {
    /*
    state = {
        post: {}
    }

    componentDidMount() {
        fetch(APIdata).then((response) => {
            response = response.json();
            response.then((result) => {
                this.setState({post: result});
            })
        })
    }
    */

    render() {
        return (
            <>
            <ul className='page-items'>
                <Frame src={APIdata.assets[9].image_url} text={APIdata.assets[9].name} desc={APIdata.assets[9].description} label="Collection WARCRIME" path='/NFT'/>
                <Frame src={APIdata.assets[8].image_url} text={APIdata.assets[8].name} desc={APIdata.assets[8].description} label="Collection WARCRIME" path='/NFT'/>
            </ul>
            <ul className='page-items'>
                <Frame src={APIdata.assets[7].image_url} text={APIdata.assets[7].name} desc={APIdata.assets[7].description} label="Collection WARCRIME" path='/NFT'/>
                <Frame src={APIdata.assets[6].image_url} text={APIdata.assets[6].name} desc={APIdata.assets[6].description} label="Collection WARCRIME" path='/NFT'/>
            </ul>
            <ul className='page-items'>
                <Frame src={APIdata.assets[5].image_url} text={APIdata.assets[5].name} desc={APIdata.assets[5].description} label="Collection WARCRIME" path='/NFT'/>
                <Frame src={APIdata.assets[4].image_url} text={APIdata.assets[4].name} desc={APIdata.assets[4].description} label="Collection WARCRIME" path='/NFT'/>
            </ul>
            <ul className='page-items'>
                <Frame src={APIdata.assets[3].image_url} text={APIdata.assets[3].name} desc={APIdata.assets[3].description} label="Collection WARCRIME" path='/NFT'/>
                <Frame src={APIdata.assets[2].image_url} text={APIdata.assets[2].name} desc={APIdata.assets[2].description} label="Collection WARCRIME" path='/NFT'/>
            </ul>
            <ul className='page-items'>
                <Frame src={APIdata.assets[1].image_url} text={APIdata.assets[1].name} desc={APIdata.assets[1].description} label="Collection WARCRIME" path='/NFT'/>
                <Frame src={APIdata.assets[0].image_url} text={APIdata.assets[0].name} desc={APIdata.assets[0].description} label="Collection WARCRIME" path='/NFT'/>
            </ul>
            </>
        );
    }
}

export default API;
