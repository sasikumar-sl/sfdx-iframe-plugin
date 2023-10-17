import React from 'react';

import { ReactComponent as SupportLogicIcon } from '../../icons/supportlogic.svg';
import { ReactComponent as OpenInNewTabIcon } from '../../icons/open-in-new-tab.svg';

import { HeaderContainer, LinkWrapper, Text } from './Header.styles';
import useCaseContext from '../../reactCustomHooks/useCaseContext';

function Header() {
  const { userAndCaseDetails } = useCaseContext();
  return (
    <HeaderContainer>
      <SupportLogicIcon />
      <Text className="case-number">{userAndCaseDetails?.caseNumber}</Text>
      <LinkWrapper
        href="https://www.example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text>View in SupportLogic</Text>
        <OpenInNewTabIcon width="30" height="30" />
      </LinkWrapper>
    </HeaderContainer>
  );
}

export default Header;
