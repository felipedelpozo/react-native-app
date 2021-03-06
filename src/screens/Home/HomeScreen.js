import * as React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Avatar, Text, List} from 'react-native-paper';

import {getRelativeTime} from '~/helpers';
import {useApp} from '~/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
  },
  listItem: {
    width: '100%',
  },
  relativeTime: {
    fontSize: 8,
  },
});

const Profile = ({navigation, ...userdata}) => (
  <>
    <List.Item
      title={userdata.displayName}
      description={
        userdata.signInAt && getRelativeTime(userdata.signInAt.toDate())
      }
      left={(props) => (
        <Avatar.Image {...props} source={{uri: userdata.photoURL}} />
      )}
      right={(props) => <List.Icon {...props} icon="chevron-right" />}
      style={styles.listItem}
      onPress={() => navigation.navigate('User', {userdata})}
    />
  </>
);

const HomeScreen = ({navigation}) => {
  const {users} = useApp();

  if (!users) {
    return <Text>Espere</Text>;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {users && users.map((user) => <Profile {...{navigation, ...user}} />)}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
