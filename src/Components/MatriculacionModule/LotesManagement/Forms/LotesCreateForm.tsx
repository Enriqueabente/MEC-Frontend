'use client';

import { Button, Label,FileInput } from 'flowbite-react';
import { FC } from 'react';
//import { useCrudContext } from '../../../../hooks/useCrudContext';



export const LotesCreateForm: FC = () => {

  //const { } = useCrudContext();

  const onSubmitButton = (event: { preventDefault: () => void; }) => {
    event.preventDefault();


    console.log("CREADO")

  };
  return (
    <>
          <h1 className=' text-2xl pb-5 text-black'>Cargar lote de matriculas</h1>

          <form onSubmit={onSubmitButton} className="space-y-10">

            <div className='flex w-full items-center justify-between'>
              <div>
                Asegurarse de que el archivo cumpla con el formato proporcionado en la plantilla
              </div>
              <Button color='blue'>
                Descargar plantilla
              </Button>
            </div>
              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="dropzone-file"
                  className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click para subir</span> o arrastra y suelta                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">CSV</p>
                  </div>
                  <FileInput id="dropzone-file" className="hidden" />
                </Label>
              </div>
            <div className="flex w-full justify-end">
              <Button color="blue" type="submit">Registrar</Button>
            </div>
          </form>
    </>
  );
}