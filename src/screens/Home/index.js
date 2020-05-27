import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerContent from './DrawerContent';
import Profile from './Profile';
import Header from './Header';
import BottomTabs from './BottomTabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FeedList"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{headerTitle: 'Home'}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerTitle: 'Profile'}}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
