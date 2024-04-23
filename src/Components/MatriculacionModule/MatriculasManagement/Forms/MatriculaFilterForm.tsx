
'use client';

import { Button, Label, Select, TextInput } from 'flowbite-react';
import { FC } from 'react';
import { useCrudContext } from '../../../../hooks/useCrudContext';
import { Matricula } from '../../../../models/Matriculacion';



export const MatriculaFilterForm: FC = () => {
  const { setOpenSearchModal } = useCrudContext<Matricula>();

  function onSearch() {
    console.log("Buscando")
  }
  return (
    <>

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
              <Label htmlFor="user-membership" value="Universidad/sede" />
            </div>
            <Select id="user-membership" required>
              <option>Selecciona una opcion</option>
              <option>UNA - Facultad Politecnica - San Lorenzo</option>
              <option>UNA - Facultad Politecnica - Villarica</option>
            </Select>
          </div>

          <Button type="submit" color="blue" onClick={onSearch}>Buscar</Button>
          <Button color="gray" onClick={() => setOpenSearchModal(false)}>Cancelar</Button>
        </div>

      </form>




    </>
  );
}

