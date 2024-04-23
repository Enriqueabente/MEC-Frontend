
'use client';

import { Button, Label, Select, TextInput } from 'flowbite-react';
import { FC } from 'react';
import { useCrudContext } from '../../../../hooks/useCrudContext';
import { UserInfo } from '../../../../models/Auditoria';



export const UserFilterForm: FC = () => {
  //Aca va a tener que actualizar la lsita que se muestra en la tabla
  const { itemList } = useCrudContext<UserInfo>();

  function onSearch() {
    console.log(itemList)
    console.log("Buscando")
  }

  return (
    <>


      <h3 className="text-xl font-medium text-gray-900 dark:text-white">Filtros</h3>
      <span className='text-xs font-bold'>*Deja los valores por defecto en los campos que no son de tu interes</span>

      <form onSubmit={onSearch}>
        <div className="flex flex-col space-y-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="user-name" value="Nombre de usuario" />
            </div>
            <TextInput id="user-name" required />
          </div>


          <div>
            <div className="mb-2 block">
              <Label htmlFor="user-nombre" value="Nombres" />
            </div>
            <TextInput id="user-name" required />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="user-apellido" value="Apellidos" />
            </div>
            <TextInput id="user-apellido" type="text" />
          </div>


          <div>
            <div className="mb-2 block">
              <Label htmlFor="user-email" value="Correo electronico" />
            </div>
            <TextInput id="user-email" />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="user-membership" value="Universidad/sede" />
            </div>
            <Select id="user-membership" required>
              <option>Selecciona una opcion</option>
              <option>UNA - Facultad Politecnica - San Lorenzo</option>
              <option>UNA - Facultad Politecnica - Villarica</option>
            </Select>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="user-role" value="Selecciona un rol de para el usuario" />
            </div>
            <Select id="user-membership" required>
              <option>Selecciona una opcion</option>
              <option>MEC_ADMIN</option>
              <option>SEDE_LECTOR</option>
              <option>SEDE_EDITOR</option>
              <option>SEDE_CARGA_MASIVA</option>
            </Select>
          </div>

          <Button onClick={onSearch}>Buscar</Button>
        </div>

      </form>


    </>
  );
}

