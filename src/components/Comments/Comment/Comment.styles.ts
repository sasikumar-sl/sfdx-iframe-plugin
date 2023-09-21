import styled from "styled-components";


export const Container = styled.div`
    width: 60%;
    height: 100%;
    /* padding: 10px; */
`;

export const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 18px 0;
`;


export const CommentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;


const commonFontStyles = `
    font-family: Avenir;
    font-style: normal;
    line-height: normal;
`;

export const Profile = styled.div`
    flex: 1;

    & > span {
    color: #4A4A4A;
    font-size: 14px;
    font-weight: 500;
    ${commonFontStyles}
    }
`;

export const CommentedAt = styled.span`
    color: #9B9B9B;
    font-size: 10px;
    font-weight: 300;
    ${commonFontStyles}
`;

export const CommentBody = styled.div`
    width: 100%;
    overflow: auto;
    color: #4A4A4A;
    font-size: 13px;
    font-weight: 400;
    ${commonFontStyles}
`;