import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  min-width: 250px;
  height: 100%;
  /* padding: 10px; */
`;

export const AnnotationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 18px 0;

  /* @media (max-width: 305px) {
    gap: 15px;
    padding: 0 18px;
  } */
`;

export const AnnotationHeader = styled.div`
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
  display: inline-flex;
  align-items: center;

  & > span {
    color: #4a4a4a;
    font-size: 14px;
    font-weight: 500;
    ${commonFontStyles}
  }
`;

export const AnnotationAt = styled.span`
  color: #9b9b9b;
  font-size: 10px;
  font-weight: 300;
  ${commonFontStyles}
`;

export const AnnotationBody = styled.div`
  width: 100%;
  overflow: auto;
  color: #4a4a4a;
  font-size: 13px;
  font-weight: 400;
  height: 54px;
  ${commonFontStyles}

  @media (max-width: 305px) {
    font-size: 12px;
    min-height: 75px;
  }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  height: inherit;
`;
export const LoaderContainer = styled.div`
  width: 70%;
  min-width: 250px;
  height: 100%;
  margin: 10px auto;

  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
`;
export const SkeletonWrapper = styled.div`
  padding: 15px;
`;

const commonStyles = `
  display: flex;
  align-items: center;
`;

export const SkeletonHeader = styled.div`
  ${commonStyles}
  justify-content: space-between;
`;
export const SkeletonProfile = styled.div`
  ${commonStyles}
  gap: 16px;
`;

export const SkeletonName = styled.div`
  width: 150px;
  height: 15px;
`;
export const SkeletonDate = styled.div`
  width: 120px;
  height: 15px;
`;

export const SkeletonText = styled.div`
  width: 100%;
  height: 15px;
`;
