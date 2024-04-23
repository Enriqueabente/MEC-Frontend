import { FC } from "react"
import { Outlet } from "react-router-dom"
import MecBrand from '../assets/Ministerio_Logo.png'
import GovBrand from '../assets/GobiernoBrand.png'
import RuesBrand from '../assets/Rues-Logo.png'
import { Footer } from "flowbite-react"



const Header: FC = () => {
    return <>

        <div className="flex justify-between items-center ">
            <div>
                <img src={MecBrand}></img>
            </div>
            <div>
                <img src={RuesBrand} className="mr-3 h-12 sm:h-24" alt="" />

            </div>

        </div>
    </>
}
const RuesFooter: FC = () => {
    return <>
        <div className=" bg-blue-600 w-full h-10">

        </div>
        <Footer container>
            <div className="w-full  sm:flex sm:items-center sm:justify-between ">
                <div>
                    <img className='border-3 rounded-md' src={GovBrand}></img>
                </div>
                <div className=" flex space-x-10">
                    <div>
                        <Footer.Title title="Acerca de " />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Sistema Rue</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Politicas de Privacidad</Footer.Link>
                            <Footer.Link href="#">Terminos y Condiciones</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>

            </div>
        </Footer>
    </>
}
export const MainLayout: FC = () => {

    return <>
            <Header></Header>
            <Outlet></Outlet>
            <RuesFooter></RuesFooter>
    </>
}