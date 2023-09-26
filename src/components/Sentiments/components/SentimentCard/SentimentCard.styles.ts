import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  min-width: 280px;
  width: 70%;
  height: 124px;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
`;

export const Wrapper = styled.div``;

export const SignalLabels = styled.div`
  display: flex;
  row-gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    overflow-x: auto;
    width: 250px;
    flex-wrap: nowrap;
    overflow-y: hidden;
  }

  span {
    padding: 0px 9px 0px 8px;
    line-height: 22px;

    @media (max-width: 767px) {
      height: 16px;
      padding: 0 10px;
    }
  }
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
  color: #9b9b9b;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

export const BluredWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  border-radius: 4px;
  background: rgba(237, 237, 237, 0.67);
  backdrop-filter: blur(4px);
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BluredTitle = styled.span`
  color: #4a4a4a;
  font-family: Avenir;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  & a {
    text-decoration: none;
    color: #0ea9e0;
  }
`;
