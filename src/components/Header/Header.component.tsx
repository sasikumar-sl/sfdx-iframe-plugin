import React, { useMemo } from 'react';

import { ReactComponent as SupportLogicIcon } from '../../icons/supportlogic.svg';
import { ReactComponent as OpenInNewTabIcon } from '../../icons/open-in-new-tab.svg';

import { HeaderContainer, LinkWrapper, Text } from './Header.styles';
import useCaseContext from '../../reactCustomHooks/useCaseContext';
import { supportDetailsEndPoint } from '../../common/constants';

function Header() {
  const { salesforceData } = useCaseContext();
  const caseLink = useMemo(() => {
    const baseUrl = salesforceData?.sl_api_url?.replace('iframe.', '');
    const caseNumber =
      Number(salesforceData?.parent_number) ?? salesforceData?.parent_number;
    return `${baseUrl}/${supportDetailsEndPoint}/${caseNumber}`;
  }, [salesforceData?.sl_api_url, salesforceData?.parent_number]);
  return (
    <HeaderContainer>
      <SupportLogicIcon />
      <LinkWrapper href={caseLink} target="_blank" rel="noopener noreferrer">
        <Text>View in SupportLogic</Text>
        <OpenInNewTabIcon width="30" height="30" />
      </LinkWrapper>
    </HeaderContainer>
  );
}

export default Header;
