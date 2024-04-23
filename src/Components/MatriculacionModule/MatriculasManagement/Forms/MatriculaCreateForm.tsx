'use client';

import { FC } from 'react';
import { Step1FormulariodeSolicitudDeDocumento, Step2DatosDetalladosdelEstudiante, Step3MatricularEstudiante } from './FormulariosDeCreacionMatriculas';
import { Stepper } from '../../../Stepper';
import { CreateMatriculaContextProvider } from '../context/MatriculaCreateFlowContext';

export const MatriculaCreateForm: FC = () => {

  return (
    <>
          <CreateMatriculaContextProvider >
            <div className=" flex flex-col justify-center">
              <Stepper></Stepper>
              <Step1FormulariodeSolicitudDeDocumento></Step1FormulariodeSolicitudDeDocumento>
              <Step2DatosDetalladosdelEstudiante></Step2DatosDetalladosdelEstudiante>
              <Step3MatricularEstudiante></Step3MatricularEstudiante>
            </div>
          </CreateMatriculaContextProvider>
    </>
  );
}