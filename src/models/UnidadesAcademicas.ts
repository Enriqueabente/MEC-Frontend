export interface Universidad{
    id:number;
    nombre:string;
    createdAt?:string;
    updatedAt?:string;
}
export interface Sede{
    id:number;
    nombre:string;
    universidad:Universidad;
    departamento:string;
    distrito:string;
    createdAt?:string;
    updatedAt?:string;
}

export interface UnidadAcademica{
    id:number;
    nombre:string;
    universidad:Universidad;
    sedes:Sede[];
    createdAt:string;
    updatedAt:string;
}
