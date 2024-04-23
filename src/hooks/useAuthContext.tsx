import { useContext } from 'react';
import { AuthContext, AuthContextProps } from './AuthContext';

export const useAuthContext = () => {
    return useContext<AuthContextProps>(AuthContext);
  };
  