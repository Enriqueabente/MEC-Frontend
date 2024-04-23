import { useContext } from 'react';
import { LoteContext, LoteContextProps } from './LoteContext';



export const useLoteContext =  <T extends object>() => {
    return useContext<LoteContextProps<T>>(LoteContext);
  };
  ``