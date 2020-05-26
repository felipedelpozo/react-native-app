import React from 'react';

import AppProvider, {useApp} from './app';

const Provider = ({children}) => <AppProvider>{children}</AppProvider>;

export {useApp};
export default Provider;
