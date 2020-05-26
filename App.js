import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Provider from '~/store';
import Main from '~/Main';

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
