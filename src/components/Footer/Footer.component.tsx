import React from 'react';

import { FooterContainer, Label, StyledDoubleDownIcon } from './Footer.styles';

export type AnnotationType = {
    id: string;
    text: string;
    [k: string]: any;
};

type Props = {
    annotations: AnnotationType[]
};

const Footer: React.FC<Props> = ({ annotations = [] }) => {
    if(!annotations.length) {
        return <FooterContainer>
            <Label>No Case Annotations</Label>
        </FooterContainer>
    }

    return (
        <FooterContainer>
            <Label>Case Annotations</Label>
            <StyledDoubleDownIcon/>
        </FooterContainer>
    );
};

export default Footer;