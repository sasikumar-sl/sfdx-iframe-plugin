import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppContainer } from './App.styles';
import { MainContent } from './screens/MainContent/MainContent.component';
import Login from './screens/Login/Login.component';
import ThemeProvider from './common/helpers/utils/ThemeProvider';
import { ErrorBoundary, TMethodName } from './common';
import { useWindowMessageListener } from './reactCustomHooks/useWindowMessageListener';

function App() {
  // Initiating the window message listener hook for get data from Parent
  const { receivedData } = useWindowMessageListener<{ data: unknown }>();

  const getCaseDetails = (payload: TMethodName & { data: unknown }): void =>
    window.parent.postMessage(payload, '*');

  useEffect(() => {
    const payload = {
      methodName: 'GET_SESSION_DETAILS',
      data: 'Initiate API call to SF and get date',
    };
    getCaseDetails(payload);
  }, []);

  // eslint-disable-next-line no-console
  console.log('################# Plugin APP: ', JSON.stringify(receivedData));

  const [isUserLoggedIn] = React.useState<boolean>(true);

  const component = isUserLoggedIn ? <MainContent /> : <Login />;
  return (
    <ThemeProvider>
      <ErrorBoundary
        onError={(error) => {
          // eslint-disable-next-line no-console
          console.log('On error: ', error);
        }}
      >
        <AppContainer>{component}</AppContainer>
        <ReactQueryDevtools initialIsOpen={false} />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
