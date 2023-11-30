import React from 'react';

import { ReactComponent as SupportLogicIcon } from '../../icons/supportlogic.svg';
import { ReactComponent as OpenInNewTabIcon } from '../../icons/open-in-new-tab.svg';

import { HeaderContainer, LinkWrapper, Text } from './Header.styles';
import useCaseContext from '../../reactCustomHooks/useCaseContext';

function Header() {
  const { salesforceData } = useCaseContext();
  return (
    <HeaderContainer>
      <SupportLogicIcon />
      {/* <Text className="case-number">{salesforceData?.parent_number}</Text> */}
      <LinkWrapper
        href={`${salesforceData?.sl_api_url}/support/cases/${
          Number(salesforceData?.parent_number) ?? salesforceData?.parent_number
        }`}
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
