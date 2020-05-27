import React from 'react';
import auth from '@react-native-firebase/auth';
import {View} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useApp} from '~/store';

import styles from './Styles';

const DrawerContent = (props) => {
  const {user} = useApp();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri: user.photoURL,
            }}
            size={50}
          />
          <Title style={styles.title}>{user.displayName}</Title>
          <Caption style={styles.caption}>{user.email}</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Profile"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons name="tune" color={color} size={size} />
            )}
            label="Preferences"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons name="logout" color={color} size={size} />
            )}
            label="Logout"
            onPress={() => auth().signOut()}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
