import React, { Component } from 'react';
import Frame from '../design/components/Frame';

class Yemeni extends Component {

    

    render() {
        return (
            <Frame src='/pictures/Yemeni.jpg' text='La Guerre' desc={"Description de la guerre"} price={"0.05 GöETH"} label='Guerre' path='/NFT'/>
        );
    }
}

export default Yemeni;


