// UserContext.tsx (renombrado de UserContext.js)
import { createContext, useState, ReactNode } from "react";
import { Persona } from "../../../../models/Matriculacion";

export interface CreateMatriculaContextProps {
  showStep1: boolean;
  setShowStep1: (state: boolean) => void;
  showStep2: boolean;
  setShowStep2: (state: boolean) => void;
  showStep3: boolean;
  setShowStep3: (state: boolean) => void;
  activeStep: number;
  setActiveStep: (state: number) => void;
  persona:Persona;
  setPersona:(state: Persona) => void;
 
}


const defaultValuecontext:CreateMatriculaContextProps = {
  showStep1: false,
  setShowStep1: ()=>{},
  showStep2: false,
  setShowStep2: ()=>{},
  showStep3: false,
  setShowStep3:()=>{},
  activeStep: 0,
  setActiveStep: ()=>{},
  persona:{ numero_documento: "", nombres: "", apellidos: "", terminoColegio: false, tieneAntecedentes: false, createdAt: "", updatedAt: "" },
  setPersona:()=>{},
};
export const CreateMatriculaContext = createContext<CreateMatriculaContextProps>(defaultValuecontext);


export const CreateMatriculaContextProvider = ({ children }: { children: ReactNode }) => {
  const [showStep1, setShowStep1] = useState(true);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep3, setShowStep3] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(1);//para indicar el paso actual del flujo
  const [persona, setPersona] = useState<Persona>({ numero_documento: "", nombres: "", apellidos: "", terminoColegio: false, tieneAntecedentes: false, createdAt: "", updatedAt: "" })

  const state:CreateMatriculaContextProps = {
    showStep1: showStep1,
    setShowStep1: setShowStep1,
    showStep2: showStep2,
    setShowStep2: setShowStep2,
    showStep3: showStep3,
    setShowStep3: setShowStep3,
    activeStep: activeStep,
    setActiveStep: setActiveStep,
    persona:persona,
    setPersona:setPersona,
  };

  return <CreateMatriculaContext.Provider value={state}>
    
    
    {children}</CreateMatriculaContext.Provider>;
};
