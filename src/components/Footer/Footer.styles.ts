import styled from "styled-components";

import { ReactComponent as DoubleDownIcon} from '../../icons/chevron-double-down.svg'; 
// import { ReactComponent as DoubleUpIcon} from '../../icons/chevron-double-up.svg';

export const FooterContainer = styled.section`
    height: 40px;
    flex-shrink: 0;
    border: 1px solid #D7D7D7;
    background: #FFF;
    padding: 0 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Label = styled.div`
    color: #4A4A4A;
    font-family: Avenir;
    font-size: 13px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;

    flex-grow: 1;
    text-align: center; 
`;

export const StyledDoubleDownIcon = styled(DoubleDownIcon)`
  cursor: pointer;
`;
