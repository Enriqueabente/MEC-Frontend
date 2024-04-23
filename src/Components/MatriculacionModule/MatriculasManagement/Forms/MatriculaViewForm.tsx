'use client';

import { Label, Select, TextInput, ToggleSwitch } from 'flowbite-react';
import { FC } from 'react';
import { useCrudContext } from '../../../../hooks/useCrudContext';
import { Matricula } from '../../../../models/Matriculacion';


export const MatriculaViewForm: FC = () => {
  const { selectedItem } = useCrudContext<Matricula>();

  return (
    <>
      <div className="flex flex-col space-y-4">

        <form>
          <div className='m-4'>
            <h3 className="text-4xl font-medium text-gray-900 dark:text-white">Informacion basica </h3>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="student-name" value="Nombres" />
              </div>
              <TextInput
                id="student-name"
                value={selectedItem?.persona.nombres}
                disabled
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="student-apellido" value="Apellidos" />
              </div>
              <TextInput id="student-apellido" type="text" value={selectedItem?.persona.apellidos} disabled />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="student-ci" value="Nacionalidad" />
              </div>
              <TextInput id="student-ci" value={"Paraguayo"} disabled />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="student-ci" value="Documento identificatorio" />
              </div>
              <TextInput id="student-ci" value={selectedItem?.persona.numero_documento} disabled />
            </div>

            <div>
              <h2 className="mb-4 text-4xl font-medium text-gray-900 dark:text-white">Estado</h2>
              <ul className="max-w-md space-y-4 text-gray-500 list-inside dark:text-gray-400">


                <li className="flex items-center">
                  {selectedItem?.persona.terminoColegio ?
                    <div className='flex'>
                      <svg className="w-8 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <p> No tiene Antecedentes </p>
                    </div> :
                    <div className='flex'>
                      <svg className='flex ml-1 mr-3 w-6 h-6 flex-shrink-0 text-red-600' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                      </svg>

                      <p>Tiene Antecedentes</p>

                    </div>}
                </li>

                <li className="">
                  {selectedItem?.persona.terminoColegio ?
                    <div className='flex'>
                      <svg className="w-8 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <p> Termino la educacion media </p>
                    </div> :
                    <div className='flex'>
                      <svg className='flex ml-1 mr-3 w-6 h-6 flex-shrink-0 text-red-600' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                      </svg>

                      <p>No termino la educacion media</p>

                    </div>}
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="materia" value="Materia" />
              </div>
              <TextInput
                id="materia"
                value={selectedItem?.materia}
                disabled
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="unidadAcademica">Unidad academica</Label>
              </div>
              <Select
                id="unidadAcademica"
                value={selectedItem?.unidadAcademica.nombre}
                disabled                        >

              </Select>
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="carreras" value="Carrera" />
              </div>
              <TextInput id="carrera" type="text" value={selectedItem?.carrera} disabled />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="anhoLectivo" value="Año lectivo" />
              </div>
              <TextInput id="anhoLectivo" value={selectedItem?.anhoLectivo}
                disabled
              />
            </div>

            <div>

              <ToggleSwitch
                disabled
                id="esCondicional"
                checked={selectedItem?.esCondicional ?? false}
                label="Cuenta Activa"
                onChange={() => console.log('a')}
              />
            </div>


          </div>
        </form>
      </div>

    </>
  );
}