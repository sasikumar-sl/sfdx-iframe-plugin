import styled from "styled-components";
import { ReactComponent as InfoIcon } from '../../icons/circled-information.svg'; 
import { Score } from '@supportlogic/frontend-library';


export const SentimentsContainer = styled.div`
    width: 100%;
    height: 100%;
`;


export const Scorers = styled.div`
    height: 62px;
    width: 100%;
    background: #fff;
    display: inline-flex;
    justify-content: center;
    gap: 40px;
`;

export const ScoreWrapper = styled.div`
    display: inline-flex;
    padding: 4px;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const ScoreCardsWrapper = styled.div`
    height: 190px;
    flex-shrink: 0;
    background: #F8F8F8;
`;

export const StyledScore = styled(Score)`
    gap: 8px !important;
    color: #4A4A4A;
    font-family: Avenir;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    div:nth-child(2) {
    }
`;
export const StyledInfoIcon = styled(InfoIcon)`
`;

