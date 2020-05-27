import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Title,
  Caption,
  Text,
  Avatar,
  TextInput,
  Button,
} from 'react-native-paper';

import {useApp} from '~store';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },
  form: {
    padding: 25,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    width: '100%',
  },
  button: {
    marginTop: 10,
    marginBottom: 40,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  textDescription: {
    width: '100%',
  },
});

const Description = ({isCurrent, description}) => {
  const {user} = useApp();
  const [value, setValue] = useState(description);

  const submit = async () => {
    await firestore()
      .collection('Users')
      .doc(user.uid)
      .update({description: value});
  };

  if (isCurrent) {
    return (
      <View style={styles.form}>
        <TextInput
          label="Description"
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <Button
          style={styles.button}
          disabled={description === value}
          mode="contained"
          onPress={() => submit()}>
          Update
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.form}>
      <Caption>Description</Caption>
      <Text style={styles.textDescription}>
        {description || 'No description'}
      </Text>
    </View>
  );
};

const Profile = ({userdata}) => {
  const {user} = useApp();

  const isCurrent = !userdata;
  const {displayName, email, photoURL, description = ''} = isCurrent
    ? user
    : userdata;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Avatar.Image source={{uri: photoURL}} />
        <Title style={styles.title}>{displayName}</Title>
        <Caption style={styles.caption}>{email}</Caption>
      </View>
      <Description isCurrent={isCurrent} description={description} />
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
