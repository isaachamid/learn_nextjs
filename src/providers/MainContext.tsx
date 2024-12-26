import React, {createContext, useEffect} from 'react';

import {
  IContextReturnType,
  IMainContextProps,
  IMainContextState,
} from '@/types/MainContext.types';

export const Context = createContext<IContextReturnType>(
  {} as IContextReturnType
);

const MainContext = (props: IMainContextProps) => {
  const {children} = props;
  const [state, setState] = React.useState<IMainContextState>({
    user: {name: 'Hamid', family: 'Isaac'},
  });

  const isLoggedIn = (): boolean => {
    return !!state.user;
  };

  return (
    <Context.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default MainContext;
