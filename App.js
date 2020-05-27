import React from 'react';

import Provider from '~/store';
import Main from '~/Main';

const App = () => {
  return (
    <Provider>
      <Main />
    </Provider>
  );
};

export default App;
