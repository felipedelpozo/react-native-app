import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Appbar, Avatar, useTheme} from 'react-native-paper';

import {useApp} from '~/store';

const Header = ({scene, previous, navigation}) => {
  const {user} = useApp();
  const theme = useTheme();

  const style = new StyleSheet.create({
    iconLogo: {},
    content: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  });

  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{colors: {primary: theme.colors.surface}}}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.pop}
          color={theme.colors.primary}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Avatar.Image
            size={40}
            source={{
              uri: user.photoURL,
            }}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content title={title} style={style.content} />
    </Appbar.Header>
  );
};

export default Header;
