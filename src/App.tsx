import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { ErrorBoundary } from 'react-error-boundary';

import { AppContainer } from './App.styles';
import { MainContent } from './screens/MainContent/MainContent.component';
import ThemeProvider from './common/helpers/utils/ThemeProvider';
import { ErrorBoundary } from './common';
// import ErrorPlaceholder from './components/ErrorPlaceholder/ErrorPlaceholder.component';

function App() {
  return (
    <ThemeProvider>
      {/* <ErrorBoundary
        fallback={<ErrorPlaceholder />}
        onError={(error: any) => {
          // eslint-disable-next-line no-console
          console.log('====================== ON ERROR: ', error);
        }}
      > */}
      <ErrorBoundary
        onError={(error: any) => {
          // eslint-disable-next-line no-console
          console.log('====================== EB ON ERROR: ', error);
        }}
      >
        <AppContainer>
          <MainContent />
        </AppContainer>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  );
}

export default App;
