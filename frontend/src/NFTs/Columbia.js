import React, { Component } from 'react';
import Frame from '../design/components/Frame';

class Columbia extends Component {

    

    render() {
        return (
            <Frame src='/pictures/Columbia.jpg' text='La Guerre' desc={"Description de la guerre"} price={"0.05 GöETH"} label='Guerre' path='/NFT'/>
        );
    }
}

export default Columbia;


