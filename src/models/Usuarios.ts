
export interface Estudiante {
    numero_documento: string,
    nombres: string,
    apellidos: string,
    terminoColegio: boolean,
    tieneAntecedentes: boolean,
    createdAt: Date,
    updatedAt: Date
}


export interface UserAdmin {
    username: string,
    password: string,
    email: string,
    rol: {name:string},

}


export interface UserSede {
    username: string,
    password: string,
    sede: {id:number},
    rol: {name:string},
}



