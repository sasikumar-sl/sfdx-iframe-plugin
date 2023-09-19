import React from 'react';
import { PlaceHolderWrapper, Title, StylesTalkingBubblesIcon } from './Placeholder.styles';

const PlaceHolder: React.FC =  () => {
    return (
        <PlaceHolderWrapper>
            <Title>No Sentiments Detected</Title>
            <StylesTalkingBubblesIcon/>
        </PlaceHolderWrapper>
    );
}

export default PlaceHolder;