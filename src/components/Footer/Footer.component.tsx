import React from 'react';

import { FooterContainer, Label, StyledDoubleDownIcon } from './Footer.styles';

type Props = {};

const Footer: React.FC<Props> = () => {
    return (
        <FooterContainer>
            <Label>Case Annotations</Label>
            <StyledDoubleDownIcon/>
        </FooterContainer>
    );
};

export default Footer;