import React from 'react';
import { AppContainer } from './App.styles';
import { MainContent } from './screens/MainContent/MainContent.component';
import Login from './screens/Login/Login.component';
import ThemeProvider from './common/helpers/utils/ThemeProvider';
import { ErrorBoundary } from './common';

function App(): JSX.Element {
  const [isUserLoggedIn] = React.useState<boolean>(true);

  const component = isUserLoggedIn ? <MainContent /> : <Login />;
  return (
    <ThemeProvider>
      <ErrorBoundary onError={(error) => console.log('On error: ', error)}>
        <AppContainer>{component}</AppContainer>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
