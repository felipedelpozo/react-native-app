import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

const Loader = () => {
  return (
    <View>
      <ActivityIndicator animating={true} color={Colors.red800} />
    </View>
  );
};

export default Loader;
