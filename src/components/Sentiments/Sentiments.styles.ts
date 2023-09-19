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
    width: 16px;
    height: 16px;
    margin-top: 3px;
`;

export const ScoreCardsWrapper = styled.div`
    height: 190px;
    flex-shrink: 0;
    background: #F8F8F8;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Card = styled.div`
  min-width: 339px; /* Set the width and height to match the SVG */
  width: 60%;
  height: 124px;
  /* background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="339" height="124" viewBox="0 0 339 124" fill="none"><path d="M0.5 4.7118C0.5 2.7788 2.067 1.21179 4 1.21179H335C336.933 1.21179 338.5 2.7788 338.5 4.71179V119.712C338.5 121.645 336.933 123.212 335 123.212H4C2.067 123.212 0.5 121.645 0.5 119.712V4.7118Z" fill="white" stroke="#E1E1E1"/></svg>'); */
  background-repeat: no-repeat;
  background-size: cover; /* Scale the SVG to cover the entire card */
  border: 1px solid #E1E1E1; /* Add a border with the same color as the SVG stroke */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a shadow for depth */
  padding: 20px; /* Add padding to the card content */
  box-sizing: border-box; /* Include padding in width and height */
`;

