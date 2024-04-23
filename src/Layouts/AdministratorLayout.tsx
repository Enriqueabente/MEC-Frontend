import { FC } from "react"
import { DesktopNavBar, DesktopNavBarProps } from "../Components/NavigationBar/NavigationBar"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"






export const AdministratorLayout: FC = () => {
    const navbar: DesktopNavBarProps = {
        moduleName: "Modulo Administrativo",
        backPath: "/",
        dropdowns: [{
            dropdownTitle: "Gestionar Accesos y Recursos",
            dropdownItems: [{ title: "Gestionar usuarios", path: "usuarios" }, { title: "Gestionar Roles y permisos", path: "roles" }]
        }, {
            dropdownTitle: "Monitoreo de actividades",
            dropdownItems: [{ title: "Inicios de sesion ", path: "actividades" },{title: "Actividad de Matriculaciones", path:"actividadmatricula"}]
        }]
    }



    return <>
        <DesktopNavBar moduleName={navbar.moduleName} backPath={navbar.backPath} dropdowns={navbar.dropdowns}></DesktopNavBar>
        <Routes>
            <Route path="/" element={<Navigate to="/administracion/usuarios" />} />
        </Routes>
        
        
        <Outlet></Outlet>
    </>
}