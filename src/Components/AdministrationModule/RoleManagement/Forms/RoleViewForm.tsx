
'use client';

import { Label, TextInput } from 'flowbite-react';
import { FC } from 'react';
import { useCrudContext } from '../../../../hooks/useCrudContext';
import { Role } from '../../../../models/RolesPermisos';



export const RoleViewForm: FC = () => {
  const { selectedItem } = useCrudContext<Role>();



  return (
    <>

        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Filtros</h3>
            <span className='text-xs font-bold'>*Deja los valores por defecto en los campos que no son de tu interes</span>


          
        <h3 className="text-2xl font-medium text-gray-900 dark:text-white col-span-2 p-4">
            Registrar nuevo rol
          </h3>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Parte izquierda*/}
            <div className="lg:w-1/2 border-r lg:border-r-0 lg:mb-0 p-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Nombre de rol" />
                </div>
                <TextInput id="name" value={selectedItem?.name} disabled />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Descripcion" />
                </div>
                <TextInput id="descripcion" value={selectedItem?.descripcion} disabled  />
              </div>
            </div>

            {/* lado derecho*/}
            <div className="lg:w-1/2 p-4">
              <div>
                <div className="mb-2 block">
                  <div className="font-semibold text-1xl"> Permisos del sistema</div>
                </div>

                {selectedItem?.permisos.map((option) => (
                  <div className="flex items-center gap-2" key={option.name}>
                    <Label className="font-normal" htmlFor={option.name}>
                      {option.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
    </>
  );
}

