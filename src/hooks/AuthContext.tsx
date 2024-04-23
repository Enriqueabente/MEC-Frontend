// UserContext.tsx (renombrado de UserContext.js)
import { createContext, useState, ReactNode } from "react";
import { UserInfo } from "../models/Auditoria";

export interface AuthContextProps {
  loggedUser: UserInfo;
  setLoggedUser: (state: UserInfo) => void;
}

const defaultUserValue:UserInfo={
    "username": "",
    "email": '',
    "password": "",
    "nombre": "",
    "cuentaNoExpirada": true,
    "sede": null,
    "cuentaNoBloqueada": true,
    "credencialesNoExpirados": true,
    "cuentaActiva": true,
    "rol": {
        "name": "",
        "permisos": [],
        "descripcion": "",
        "createdAt": 0,
        "updatedAt": 0
    },
    "intentosFallidos": 0,
    "createdAt": 0,
    "updatedAt": 0,
    "enabled": true,
    "authorities": [],
    "accountNonExpired": true,
    "accountNonLocked": true,
    "credentialsNonExpired": true
}


const defaultValuecontext:AuthContextProps = {
    loggedUser:defaultUserValue,
    setLoggedUser:()=>{},


};
export const AuthContext = createContext<AuthContextProps>(defaultValuecontext);


export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [loggedUser, setLoggedUser] = useState<UserInfo>(defaultUserValue);

  const state:AuthContextProps = {
    loggedUser:loggedUser,
    setLoggedUser:setLoggedUser
  }

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
