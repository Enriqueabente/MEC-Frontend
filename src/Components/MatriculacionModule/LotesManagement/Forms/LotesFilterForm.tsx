
'use client';

import { Button, Label, Select, TextInput } from 'flowbite-react';
import { FC } from 'react';



export const LotesFilterForm: FC = () => {

  function onSearch() {
    console.log("Buscando")
  }

  return (
    <>
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">Filtros</h3>
      <span className='text-xs font-bold'>*Deja los valores por defecto en los campos que no son de tu interes</span>

      <div className="flex flex-col space-y-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="lote-id" value="Identificador de lote" />
          </div>
          <TextInput id="lote-id" required />
        </div>


        <div>
          <div className="mb-2 block">
            <Label htmlFor="lote-fecha" value="Fecha de creacion de lote" />
          </div>
          <TextInput id="lote-fecha" required />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="lote-status" value="Estado" />
          </div>
          <Select id="lote-status" required>
            <option>Selecciona una opcion</option>
            <option>Finalizado</option>
            <option>En curso</option>
          </Select>
        </div>

        <Button color='blue' onClick={onSearch}>Filtrar</Button>

      </div>

    </>
  );
}

