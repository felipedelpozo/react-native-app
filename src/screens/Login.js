import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {Button} from 'react-native';
import {FIREBASE_WEBCLIENT} from 'react-native-dotenv';

import Loader from '~/components/Loader';
import {useApp} from '~store';

GoogleSignin.configure({
  webClientId: FIREBASE_WEBCLIENT,
});

const Stack = createStackNavigator();

const Login = () => {
  const {user, initializing} = useApp();

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  if (initializing || user) {
    return <Loader />;
  }

  return (
    <Button
      title="Google Sign-In"
      onPress={() =>
        onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
      }
    />
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
