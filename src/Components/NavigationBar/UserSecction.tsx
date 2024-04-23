/*COMPONENTE RELACIONADO A LA PARTE DE NOTIFICACIONES, Y OPCIONES DE USUARIO */

import { Dropdown, Avatar } from "flowbite-react";
import { FC } from "react";
import { NotificationsPopOver } from "./NotificationPopOver";
import meclogo from '../../assets/mec-user-logo.png'
import userphoto from '../../assets/user-photo.webp'
import { logout } from "../../utils/Auth";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

import unalogo from '../../assets/una_logo.jpg'

export interface UserInfo{
    avatar:string;
    username:string;
    email:string;
    role:string;
}


//DEBERA RECIBIR EL CONTEXTO DEL LOGEO PARA EL MODULO DE USER 
const UserDropdown: FC = () => {

    const { loggedUser,setLoggedUser } = useAuthContext()

    console.log("Desde el UserSeccion esto es lo que tenemos "+ JSON.stringify(loggedUser))
    const navigate = useNavigate();
    function onLogout(){
        setLoggedUser({
            username: "",
            email: '',
            nombre: '',
            password: "",
            cuentaNoExpirada: false,
            sede: null,
            cuentaNoBloqueada: false,
            credencialesNoExpirados: false,
            cuentaActiva: false,
            rol: {
                name: "",
                descripcion: "",
                permisos: []
            },
            intentosFallidos: 0,
            createdAt: 0,
            updatedAt: 0,
            enabled: false,
            authorities: [],
            accountNonExpired: false,
            accountNonLocked: false,
            credentialsNonExpired: false
        })
        logout()

        navigate("/login");
    }
    return (
        <>
            <Dropdown
                label={<Avatar className="" alt="User settings" size="sm" img={userphoto} rounded />}
                arrowIcon={false}
                inline
            >
                <Dropdown.Header>
                    <span className="block text-sm">{loggedUser.nombre}</span>
                    <span className="block truncate text-sm font-thin">{loggedUser.email}</span>
                    <span className="block truncate text-sm">Rol</span> {loggedUser.rol.name}
                </Dropdown.Header>
                <Dropdown.Item onClick={onLogout}>Cerrar Sesion</Dropdown.Item>
            </Dropdown>

     
            <Avatar placeholderInitials="MEC" size="sm" img=
             {loggedUser.sede?.universidad.nombre==="UNIVERSIDAD NACIONAL DE ASUNCIÓN"? unalogo : meclogo }
             alt="MEC" rounded />

        </>

    );
}

const UserInfoAndNotificationSection: FC = () => {
    return <>
        <div className="UserInfo flex items-center justify-between space-x-2">
            <NotificationsPopOver></NotificationsPopOver>
            <UserDropdown></UserDropdown>
        </div>
    </>
}

export {UserInfoAndNotificationSection}
