import { FC } from "react"
import { DesktopNavBar, DesktopNavBarProps } from "../Components/NavigationBar/NavigationBar"
import { HomePage } from "../Pages/HomePage"






export const HomeLayout: FC = () => {
    const navbar: DesktopNavBarProps = {
        moduleName: "Home",
        backPath: "/",
        dropdowns: []
    }



    return <>
        <DesktopNavBar moduleName={navbar.moduleName} backPath={navbar.backPath} dropdowns={navbar.dropdowns}></DesktopNavBar>
        <HomePage></HomePage>
    </>
}