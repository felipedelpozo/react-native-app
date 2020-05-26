import React, {createContext, useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';

const Context = createContext();

const Provider = ({children}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const onAuthStateChanged = (userdata) => {
      setUser(userdata);
      if (initializing) {
        setInitializing(false);
      }
    };

    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber; // unsubscribe on unmount
  }, [initializing]);

  return (
    <Context.Provider
      value={{
        user,
        initializing,
      }}>
      {children}
    </Context.Provider>
  );
};

export const useApp = () => useContext(Context);
export default Provider;
