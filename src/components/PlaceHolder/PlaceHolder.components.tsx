import React from 'react';
import {
  PlaceHolderWrapper,
  Title,
  StylesTalkingBubblesIcon,
} from './Placeholder.styles';

function PlaceHolder(): React.JSX.Element {
  return (
    <PlaceHolderWrapper>
      <Title>No Sentiments Detected</Title>
      <StylesTalkingBubblesIcon />
    </PlaceHolderWrapper>
  );
}

export default PlaceHolder;
