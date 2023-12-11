import { styled } from 'styled-components';

export const HeaderContainer = styled.section`
  height: 44px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;

  align-self: stretch;
  border-radius: 4px 4px 0px 0px;
  border-bottom: 1px solid #d7d7d7;
  background: #f8f8f8;
  padding: 0 12px;

  @media (max-width: 305px) {
    padding: 0 6px;
  }
`;

export const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;

  cursor: pointer;
  text-decoration: none;
`;

export const Text = styled.span`
  color: #0ea9e0;
  text-align: right;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: Avenir;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &.case-number {
    color: #4a4a4a;
    font-weight: 400;
    font-size: 14px;
  }
`;
