import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppContainer } from './App.styles';
import { MainContent } from './screens/MainContent/MainContent.component';
import Login from './screens/Login/Login.component';
import ThemeProvider from './common/helpers/utils/ThemeProvider';
import { ErrorBoundary } from './common';
import { useWindowMessageListener } from './reactCustomHooks/useWindowMessageListener';

function App() {
  // Initiating the window message listener hook for get data from Parent
  useWindowMessageListener<{ data: unknown }>();

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
