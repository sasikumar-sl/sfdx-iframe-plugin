import React, { useMemo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppContainer } from './App.styles';
import { MainContent } from './screens/MainContent/MainContent.component';
import ThemeProvider from './common/helpers/utils/ThemeProvider';
import { GET_SESSION_DETAILS } from './common/constants';
import {
  ErrorBoundary,
  TData,
  TGetUserCase,
  TMethodName,
  TUserCaseDetails,
  getTransformedUserCaseDetails,
} from './common';
import { useWindowMessageListener } from './reactCustomHooks/useWindowMessageListener';
import {
  UserCaseDetailsContext,
  useSendMessageToParent,
} from './reactCustomHooks';

function App() {
  // eslint-disable-next-line no-console
  console.log('############## <-- App rndered');

  // Initiating the window message listener hook for get data from Parent
  const { receivedData } = useWindowMessageListener<TData, TGetUserCase>();

  // const getCaseDetails = (payload: TMethodName & TData): void =>
  //   window.parent.postMessage(payload, '*');

  useSendMessageToParent<TMethodName & TData>({
    methodName: GET_SESSION_DETAILS,
    data: 'Initiate API call to SF and get date',
  });

  // useEffect(() => {
  //   getCaseDetails({
  //     methodName: GET_SESSION_DETAILS,
  //     data: 'Initiate API call to SF and get date',
  //   });
  // }, []);

  const userCaseDetails: TUserCaseDetails = useMemo(
    () => getTransformedUserCaseDetails(receivedData),
    [receivedData],
  );

  const contextValue = useMemo(
    () => ({
      ...userCaseDetails,
    }),
    [userCaseDetails],
  );

  return (
    <ThemeProvider>
      <ErrorBoundary
        onError={(error) => {
          // eslint-disable-next-line no-console
          console.log('On error: ', error);
        }}
      >
        <UserCaseDetailsContext.Provider value={contextValue}>
          <AppContainer>
            <MainContent />
          </AppContainer>
        </UserCaseDetailsContext.Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
