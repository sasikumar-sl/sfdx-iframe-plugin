import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 4px;
  background: #f7f7f7;
  width: 70%;
  height: 124px;
  min-width: 280px;
`;

export const CaseComment = styled.div`
  height: 65%;
  overflow: auto;
  color: #4a4a4a;
  font-family: Avenir;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 15px;
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  height: inherit;
`;
export const LoaderContainer = styled.div`
  width: 70%;
  min-width: 280px;
  height: 100%;
  margin: 10px auto;

  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  background: #f7f7f7;
`;
export const SkeletonWrapper = styled.div`
  padding: 15px;
`;

export const SkeletonText = styled.div`
  width: 100%;
  height: 15px;

  & > * {
    padding: 20px 0;
  }
`;
