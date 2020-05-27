import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {useApp} from '~/store';
import Home from '~/screens/Home';
import Login from '~/screens/Login';

const paperTheme = {
  light: PaperDefaultTheme,
  dark: PaperDarkTheme,
};

const navigationTheme = {
  light: NavigationDefaultTheme,
  dark: NavigationDarkTheme,
};

const Main = () => {
  const {isSignedIn, theme} = useApp();

  return (
    <PaperProvider theme={paperTheme[theme]}>
      <NavigationContainer theme={navigationTheme[theme]}>
        {!isSignedIn ? <Login /> : <Home />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Main;
