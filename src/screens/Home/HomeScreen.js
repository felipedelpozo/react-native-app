import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Card, IconButton, Divider} from 'react-native-paper';

import {getRelativeTime} from '~/helpers';
import {useApp} from '~/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  relativeTime: {
    fontSize: 8,
  },
});

const Profile = ({displayName, photoURL, signInAt}) => (
  <>
    <Card.Title
      title={displayName}
      subtitle={getRelativeTime(signInAt)}
      left={(props) => <Avatar.Image {...props} source={{uri: photoURL}} />}
      right={(props) => (
        <IconButton {...props} icon="more-vert" onPress={() => {}} />
      )}
    />
    <Divider />
  </>
);

const HomeScreen = () => {
  const {users} = useApp();

  console.log({users});

  return (
    <View style={styles.container}>
      {users && users.map((user) => <Profile {...user} />)}
    </View>
  );
};

export default HomeScreen;
