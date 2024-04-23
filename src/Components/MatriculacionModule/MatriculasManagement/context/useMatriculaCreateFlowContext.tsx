import { useContext } from 'react';
import { CreateMatriculaContext, CreateMatriculaContextProps } from './MatriculaCreateFlowContext';

export const useCreateMatriculaContext = () => {
    return useContext<CreateMatriculaContextProps>(CreateMatriculaContext);
  };
  