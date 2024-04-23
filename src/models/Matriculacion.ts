import { UnidadAcademica } from "./UnidadesAcademicas";

export interface Persona {
    nombres: string;
    apellidos: string;
    numero_documento: string;
    terminoColegio: boolean;
    tieneAntecedentes: boolean;
    createdAt?:string;
    updatedAt?:string;
    hibernateLazyInitializer?:HibernateLazyInitializer |null
  }

export interface Matricula{
    id:number;
    persona:Persona;
    unidadAcademica:UnidadAcademica;
    carrera:string;
    anhoLectivo:number;
    materia:string;
    periodolectivo:number;
    esCondicional:boolean;
    createdAt?:string;
    updatedAt?:string;
}
interface HibernateLazyInitializer{
  hibernateLazyInitializer?:string;
}