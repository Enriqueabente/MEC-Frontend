import { FC } from "react";

interface ModuleTitleProps {
    moduleName: string;
}
const ModuleTitle:FC<ModuleTitleProps>=({moduleName})=>{
    return   <div className="ModuleTitle pl-4 font-semibold"> {moduleName}</div>
}


export{ModuleTitle}