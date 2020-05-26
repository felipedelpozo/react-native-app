import React, {createContext, useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import {useColorScheme} from 'react-native-appearance';

const Context = createContext();

const Provider = ({children}) => {
  const [initializing, setInitializing] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState();

  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState(colorScheme === 'dark' ? 'dark' : 'light');

  useEffect(() => {
    const onAuthStateChanged = (userdata) => {
      if (!isSignedIn && userdata && userdata.uid) {
        setUser(userdata);
        setIsSignedIn(true);
      }
    };

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    if (initializing) {
      setInitializing(false);
    }

    return subscriber; // unsubscribe on unmount
  }, [initializing, isSignedIn]);

  return (
    <Context.Provider
      value={{
        user,
        initializing,
        isSignedIn,
        theme,
        setTheme,
      }}>
      {children}
    </Context.Provider>
  );
};

export const useApp = () => useContext(Context);
export default Provider;
