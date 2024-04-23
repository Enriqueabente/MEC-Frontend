export interface Permiso{
    name:string;
    createdAt?:string;
    updatedAt?:string;
}


export interface Role{
    name:string;
    descripcion:string;
    permisos:Permiso[];
    createdAt?:number;
    updatedAt?:number;
}