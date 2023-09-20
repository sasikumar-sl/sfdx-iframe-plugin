import styled from "styled-components";

export const Card = styled.div`
    min-width: 339px;
    width: 60%;
    height: 124px;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #E1E1E1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    box-sizing: border-box;
    background-color: #ffffff;
`;

export const Wrapper = styled.div`
`;

export const SignalLabels = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-row-gap: 10px;
`;

export const SignalTextContainer = styled.div`
    max-width: calc(100% - 20px - 1em);
`;

export const SignalText = styled.div`
    margin-top: 10px;
    margin-bottom: 4px;
    font-style: normal;
    font-weight: 350;
    font-size: 14px;
    line-height: 19px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #4a4a4a;
`;

export const SignalFooterText = styled.div`
    color: #9B9B9B;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
`;
