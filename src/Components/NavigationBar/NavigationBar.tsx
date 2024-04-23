import { FC } from "react";


import { ModuleDropdownProps, ModuleDropdownsSection } from "./DropdownsSection";
import { BackButton } from "./BackButton";
import { ModuleTitle } from "./ModuleTitle";
import { UserInfoAndNotificationSection } from "./UserSecction";






/*Este tiene que recibir:
    El titulo del modul
    Los dropdowns a a mostrar
    el contexto del logeo
    En que ruta esta para poder saber en que dropdowns mostrar
*/

export interface DesktopNavBarProps {
    moduleName: string;
    backPath: string;
    dropdowns: ModuleDropdownProps[]; // Cambia el tipo de dato según lo que estés manejando en tu lista de dropdowns
}
export const DesktopNavBar: FC<DesktopNavBarProps> = ({ moduleName, backPath, dropdowns }) => {

    return (
        <>
            <nav className="NavBar text-white  bg-red-600 flex p-2">
                <div className="leftSide  w-1/6 flex justify-start items-center pl-2  ">
                    {moduleName != "Home" && (
                        <>
                            <BackButton backPath={backPath}></BackButton>
                            <ModuleTitle moduleName={moduleName}></ModuleTitle>

                        </>

                    )}
                </div>

                <div className="RightSide w-5/6 flex justify-between items-center ">
                    <ModuleDropdownsSection dropdowns={dropdowns}></ModuleDropdownsSection>

                    {/*Este componente debe estar mas independiente que los demas y debe consumir un context api a parte */}
                    <UserInfoAndNotificationSection></UserInfoAndNotificationSection>
                </div>
            </nav>

        </>

    )
}

