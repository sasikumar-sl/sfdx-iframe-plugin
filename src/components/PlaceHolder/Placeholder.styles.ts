import styled from "styled-components";
import { ReactComponent as TalkingBubblesIcon } from '../../icons/talking-bubbles.svg'; 


export const PlaceHolderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
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