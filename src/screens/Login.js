import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {Button} from 'react-native-paper';
import {FIREBASE_WEBCLIENT} from 'react-native-dotenv';

import Loader from '~/components/Loader';
import {useApp} from '~store';

GoogleSignin.configure({
  webClientId: FIREBASE_WEBCLIENT,
});

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

const image = {uri: 'https://reactjs.org/logo-og.png'};

const Login = () => {
  const {user, initializing} = useApp();

  if (initializing || user) {
    return <Loader />;
  }

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Button
          icon="google"
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }
          style={styles.button}>
          Google Sign-In
        </Button>
      </ImageBackground>
    </View>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
