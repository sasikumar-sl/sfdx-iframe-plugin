import { styled } from "styled-components";


export const HeaderContainer = styled.section`
    height: 44px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: space-between;

    align-self: stretch;
    border-radius: 4px 4px 0px 0px;
    border-bottom: 1px solid #D7D7D7;
    background: #F8F8F8;

    padding: 0 12px;
`;

export const LinkWrapper = styled.a`
    display: flex;
    align-items: center;
    gap: 4px;
    
    cursor: pointer;
    text-decoration: none;
`;

export const Text = styled.span`
    color: #0EA9E0;
    text-align: right;
    font-feature-settings: 'clig' off, 'liga' off;

    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;