import React from 'react';

import { ReactComponent as SupportLogicIcon } from '../../icons/supportlogic.svg';
import { ReactComponent as OpenInNewTabIcon } from '../../icons/open-in-new-tab.svg';

import { HeaderContainer, LinkWrapper, Text } from './Header.styles';
import { useUserCaseDetailsContext } from '../../reactCustomHooks';

function Header() {
  const { caseNumber } = useUserCaseDetailsContext();
  return (
    <HeaderContainer>
      <SupportLogicIcon />
      <Text className="case-number">{caseNumber || 124532}</Text>
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
