import React, { Component } from 'react';
import Frame from '../components/Frame';

// Url API 
const API_URL2 = "https://testnets-api.opensea.io/api/v1/asset/0xF1Dc8B59FE1f4A0b4bD62DeFAfc120cCdBf42029/2/?account_address=0xd23e8525548bC55C2E81c78f505f7147E0B4265E";

class Api_Picture extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        fetch(API_URL2).then((response) => {
            response = response.json();
            response.then((result) => {
                this.setState({post: result});
            })
        })
    }

    render() {
        return (
            <Frame src={this.state.post.image_url} text={this.state.post.name} desc={this.state.post.description} label={this.state.post.collection.name} path='/NFT'/>
        );
    }
}

export default Api_Picture;
