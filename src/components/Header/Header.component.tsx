import React from 'react';

import { ReactComponent as SupportLogicIcon } from '../../icons/supportlogic.svg';
import { ReactComponent as OpenInNewTabIcon } from '../../icons/open-in-new-tab.svg';

import { HeaderContainer, LinkWrapper, Text } from './Header.styles';

function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <SupportLogicIcon />
      <LinkWrapper
        href='https://www.example.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Text>View in SupportLogic</Text>
        <OpenInNewTabIcon width='30' height='30' />
      </LinkWrapper>
    </HeaderContainer>
  );
}

export default Header;
