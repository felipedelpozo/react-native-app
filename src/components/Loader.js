import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={Colors.red800} />
    </View>
  );
};

export default Loader;
