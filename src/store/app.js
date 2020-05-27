import React, {createContext, useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useColorScheme} from 'react-native-appearance';

const Context = createContext();

const Provider = ({children}) => {
  const [initializing, setInitializing] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);

  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme === 'dark' ? 'dark' : 'light');

  useEffect(() => {
    if (!isSignedIn) {
      return;
    }

    const subscriber = firestore()
      .collection('Users')
      .orderBy('signInAt', 'desc')
      .onSnapshot((querySnapshot) => {
        setUsers(querySnapshot.docs.map((doc) => doc.data()));
      });

    return () => subscriber();
  }, [isSignedIn]);

  useEffect(() => {
    if (user) {
      const {uid, displayName, email, photoURL} = user;

      firestore().collection('Users').doc(uid).set({
        uid,
        displayName,
        email,
        photoURL,
        signInAt: firestore.FieldValue.serverTimestamp(),
      });
    }
  }, [user]);

  useEffect(() => {
    const onAuthStateChanged = (userdata) => {
      setIsSignedIn((prev) => {
        const value = userdata !== null;

        if (prev !== value) {
          setUser(userdata);
          !value && setUsers([]);
        }

        initializing && setInitializing(false);

        return value === true;
      });
    };

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber();
  }, [initializing, isSignedIn]);

  const toggleTheme = () => {
    setTheme((last) => (last === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Context.Provider
      value={{
        user,
        users,
        initializing,
        isSignedIn,
        theme,
        toggleTheme,
      }}>
      {children}
    </Context.Provider>
  );
};

export const useApp = () => useContext(Context);
export default Provider;
