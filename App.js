import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import Provider from '~/stores';
import AppNavigator from '~/AppNavigator';

const App: () => React$Node = () => {
  return (
    <Provider>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;
