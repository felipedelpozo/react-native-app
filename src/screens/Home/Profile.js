import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Title, Caption, Avatar} from 'react-native-paper';

import {useApp} from '~store';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    width: '100%',
  },
  button: {
    marginBottom: 40,
  },
});

const Profile = ({photoURL, ...data}) => {
  const {user} = useApp();

  const isCurrent = user.uid === data.uid;

  console.log({isCurrent});

  return (
    <ScrollView>
      <View style={styles.container}>
        <Avatar.Image source={{uri: photoURL}} />
        <Title style={styles.title}>{user.displayName}</Title>
        <Caption style={styles.caption}>{user.email}</Caption>
      </View>
    </ScrollView>
  );
};

const RootNavigator = ({route}) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile">
        {(props) => <Profile {...{...props, ...route.params}} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default RootNavigator;
