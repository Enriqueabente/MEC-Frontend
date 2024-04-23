import { FC } from "react"
import { DesktopNavBar, DesktopNavBarProps } from "../Components/NavigationBar/NavigationBar"
import { Outlet, Route, Routes, Navigate } from "react-router-dom"






export const MatriculasLayout: FC = () => {

    const navbar: DesktopNavBarProps = {
        moduleName: "Modulo de matriculaciones",
        backPath: "/",
        dropdowns: [{
            dropdownTitle: "Operaciones",
            dropdownItems: [{ title: "Lista de matriculas", path: "lista" }, { title: "Carga por lotes", path: "lotes" }]
        }]
    }


    return <>
        <DesktopNavBar moduleName={navbar.moduleName} backPath={navbar.backPath} dropdowns={navbar.dropdowns}></DesktopNavBar>
        <Routes>
            <Route path="/" element={<Navigate to="/matriculas/lista" />} />
        </Routes>
        
        <Outlet></Outlet>
    </>
}