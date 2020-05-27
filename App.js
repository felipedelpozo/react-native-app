import React from 'react';

import Provider from '~/store';
import Main from '~/Main';

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider>
      <Main />
    </Provider>
  );
};

export default App;
