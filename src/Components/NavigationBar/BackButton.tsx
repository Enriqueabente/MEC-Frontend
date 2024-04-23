import { FC } from "react";
import { NavLink } from "react-router-dom";

/**COMPONENTE RELACIONADO A LA PARTE DEL TITYLO Y EL BOTON DE VOLVER */
interface BackButtonProps {
    backPath: string;
}
export const BackButton: FC<BackButtonProps> = ({ backPath }) => {
    return <>
    
    <NavLink to={backPath}>
    <div className="BackButton hover:brightness-150 cursor-pointer" onClick={() => console.log(backPath)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
        </div>

    </NavLink>

    </>
}