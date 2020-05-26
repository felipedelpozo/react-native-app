import * as React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';

import {useApp} from '~/store';
import Home from '~/screens/Home';
import Login from '~/screens/Login';

const Main = () => {
  const {isSignedIn, theme} = useApp();

  return (
    <PaperProvider
      theme={
        theme === 'light'
          ? {
              ...DefaultTheme,
              colors: {...DefaultTheme.colors, primary: '#1ba1f2'},
            }
          : {
              ...DarkTheme,
              colors: {...DarkTheme.colors, primary: '#1ba1f2'},
            }
      }>
      {!isSignedIn ? <Login /> : <Home />}
    </PaperProvider>
  );
};

export default Main;
