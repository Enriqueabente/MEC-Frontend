import { Matricula } from "./Matriculacion";
import { Role } from "./RolesPermisos";
import { Sede } from "./UnidadesAcademicas";

export interface Autority{
    authority:string;
}

export interface EventMatricula{
    tipo:string;
    user:UserInfo;
    matricula:Matricula
}

export interface UserInfo {
    username: string,
    email: string 
    nombre:string 
    password: string,
    cuentaNoExpirada: boolean,
    sede: Sede|null,
    cuentaNoBloqueada: boolean,
    credencialesNoExpirados: boolean,
    cuentaActiva: boolean,
    rol: Role,
    intentosFallidos: number,
    createdAt: number,
    updatedAt: number,
    enabled: boolean,
    authorities: Autority[],
    accountNonExpired: boolean,
    accountNonLocked: boolean,
    credentialsNonExpired: boolean
}



export interface EventLogin{
    id:string;
    user:UserInfo;
    ipAddress:string;
    loginTime:string;
}