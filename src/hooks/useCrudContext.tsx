import { useContext } from 'react';
import { CrudContext, CrudContextProps } from './CrudContext';



export const useCrudContext =  <T extends object>() => {
    return useContext<CrudContextProps<T>>(CrudContext);
  };
  ``