import React, { Component } from 'react';
import Frame from '../design/components/Frame';

class Syria extends Component {

    

    render() {
        return (
            <Frame src='/pictures/Syria.jpg' text='La Guerre' desc={"Description de la guerre"} price={"0.05 GöETH"} label='Guerre' path='/NFT'/>
        );
    }
}

export default Syria;


