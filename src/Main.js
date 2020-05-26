import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import {useApp} from '~/store';
import Home from '~/screens/Home';
import Login from '~/screens/Login';

import theme from '~/Theme';

const Main = () => {
  const {isSignedIn} = useApp();

  return (
    <PaperProvider theme={theme}>
      {!isSignedIn ? <Login /> : <Home />}
    </PaperProvider>
  );
};

export default Main;
