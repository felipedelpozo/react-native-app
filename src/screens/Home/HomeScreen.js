import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Avatar, Text, List} from 'react-native-paper';

import {getRelativeTime} from '~/helpers';
import {useApp} from '~/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listItem: {
    width: '100%',
  },
  relativeTime: {
    fontSize: 8,
  },
});

const Profile = ({displayName, photoURL, signInAt}) => (
  <>
    <List.Item
      title={displayName}
      description={signInAt && getRelativeTime(signInAt.toDate())}
      left={(props) => <Avatar.Image {...props} source={{uri: photoURL}} />}
      right={(props) => <List.Icon {...props} icon="chevron-right" />}
      style={styles.listItem}
      onPress={() => console.log({displayName, photoURL})}
    />
  </>
);

const HomeScreen = () => {
  const {users} = useApp();

  if (!users) {
    return <Text>Espere</Text>;
  }

  return (
    <ScrollView>
      {users && users.map((user) => <Profile {...user} />)}
    </ScrollView>
  );
};

export default HomeScreen;
