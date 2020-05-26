import React from 'react';
import {Appbar} from 'react-native-paper';

const App: () => React$Node = () => {
  const goBack = () => console.log('Back');
  const handleSearch = () => console.log('Search');
  const handleMore = () => console.log('More!');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" onPress={handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={handleMore} />
    </Appbar.Header>
  );
};

export default App;
