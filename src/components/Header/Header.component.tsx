import React from 'react';

import { ReactComponent as SupportLogicIcon} from '../../icons/supportlogic.svg'; // Import the SVG file as a component
import { ReactComponent as OpenInNewTabIcon } from '../../icons/open-in-new-tab.svg'; // Import the SVG file as a component

import { HeaderContainer, LinkWrapper, Text } from './Header.styles';

type Props = {};

const Header: React.FC<Props> = () => {
    return (
        <HeaderContainer>
            <SupportLogicIcon/>
            <LinkWrapper href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                <Text>View in SupportLogic</Text>
                <OpenInNewTabIcon width="30" height="30"/>
            </LinkWrapper>
        </HeaderContainer>
    );
};

export default Header;