import styled from "styled-components";
import { ReactComponent as TalkingBubblesIcon } from '../../icons/talking-bubbles.svg'; 


export const PlaceHolderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const Title = styled.span`
    color: #4A4A4A;
    font-family: Avenir;
    font-size: 13px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

export const StylesTalkingBubblesIcon = styled(TalkingBubblesIcon)`
`;