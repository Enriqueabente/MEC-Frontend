'use client';

import { Label, TextInput, ToggleSwitch } from 'flowbite-react';
import { FC } from 'react';
import { useCrudContext } from '../../../../hooks/useCrudContext';
import { UserInfo } from '../../../../models/Auditoria';


export const UserViewForm: FC = () => {
    const { selectedItem } = useCrudContext<UserInfo>();
    /* */
    return (
        <>
          <form>
                <div className="flex flex-col space-y-4">
                    <div className='m-4'>
                        <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Informacion basica </h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="student-name" value="Username" />
                            </div>
                            <TextInput
                                id="student-name"
                                value={selectedItem?.username}
                                disabled
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="student-name" value="Nombre y apellido" />
                            </div>
                            <TextInput
                                id="student-name"
                                value={selectedItem?.nombre}
                                disabled
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="student-apellido" value="Correo electronico" />
                            </div>
                            <TextInput id="student-apellido" type="text" value={selectedItem?.email} disabled />
                        </div>


                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="materia" value="Sede" />
                            </div>
                            <TextInput
                                id="materia"
                                value={selectedItem?.sede?.nombre + " - " + selectedItem?.sede?.universidad.nombre}
                                disabled
                            />
                        </div>



                        <div className='flex mt-4 flex-col space-y-4'>
                            <ToggleSwitch disabled id="esCondicional"   checked={selectedItem?.cuentaActiva ?? false} label="Cuenta Activa" onChange={() => console.log('a')} />

                        </div>



                        <div>
                            <h2 className="mb-4 mt-4 text-2xl font-medium text-gray-900 dark:text-white">Rol y permisos</h2>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="student-ci" value="Rol de usuario" />
                                </div>
                                <TextInput id="student-ci" value={selectedItem?.rol.name} disabled />
                            </div>


                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="student-ci" value="Permisos" />
                                </div>
                                <ul className="max-w-md space-y-4 text-gray-500 list-inside dark:text-gray-400">
                                    {selectedItem?.rol.permisos.map((permiso, index) => (
                                        <li key={index} className="flex space-x-4 items-center justify-start">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>

                                            <span className=" font-semibold">{permiso.name}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
            </form>

        </>
    );
}