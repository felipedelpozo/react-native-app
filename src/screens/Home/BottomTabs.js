import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import Profile from './Profile';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}
      backBehavior="initialRoute">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
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
  );
};

export default BottomTabs;
