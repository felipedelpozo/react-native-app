import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Portal, FAB} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import Profile from './Profile';

const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
  fav: {
    position: 'absolute',
    bottom: 75,
    right: 16,
  },
});

const BottomTabs = () => {
  const isFocused = useIsFocused();

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        shifting={true}
        backBehavior="initialRoute">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: 'home',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: 'account',
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB visible={isFocused} icon="feather" style={styles.fav} />
      </Portal>
    </>
  );
};

export default BottomTabs;
