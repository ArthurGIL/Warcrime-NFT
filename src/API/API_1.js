import React, { Component } from 'react';
import Frame from '../components/Frame';

// Url API 
const API_URL2 = "https://testnets-api.opensea.io/api/v1/assets?owner=0xd23e8525548bC55C2E81c78f505f7147E0B4265E&token_ids=1&token_ids=2&token_ids=3&token_ids=4&token_ids=5&token_ids=6&token_ids=7&token_ids=8&token_ids=9&token_ids=10&asset_contract_address=0xF71e5a9bB9863909F7Ed5cAfFEc8c86c4bB8f8FC&order_direction=desc&offset=0&include_orders=false";

class API_1 extends Component {
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
            <Frame src={this.state.post.image_url} text={this.state.post.name} desc={this.state.post.description} label="Collection WARCRIME" path='/NFT'/>
        );
    }
}

export default API_1;
