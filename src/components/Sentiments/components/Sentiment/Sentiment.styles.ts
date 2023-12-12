import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-width: 250px;
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
    width: 100%;
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

export const LoaderWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const SkeletonTitle = styled.div`
  width: 150px;
  min-height: 15px;
`;

export const SkeletonLabels = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  height: 40px;
  gap: 10px;
`;
export const SkeletonText = styled.div`
  width: 90%;
  height: 15px;
`;

export const SkeletonBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  gap: 5px;
`;

export const SkeletonDate = styled.div`
  width: 20%;
  height: 20px;
`;
export const SkeletonDivider = styled.div`
  width: 2%;
  height: 1px;
`;

export const SkeletonRecent = styled.div`
  width: 25%;
  height: 20px;
`;

export const SkeletonSentimentCard = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TooltipContainer = styled.div`
  max-height: 450px;
  overflow-y: auto;
  text-align: justify;
  padding: 2px;
`;
