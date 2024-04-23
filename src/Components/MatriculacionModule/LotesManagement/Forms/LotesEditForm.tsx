
'use client';

import { Button, FileInput, Label, Modal, Select, TextInput, ToggleSwitch } from 'flowbite-react';
import { FC, useState } from 'react';
export interface Persona {
    nombre: string;
    apellido: string;
    cedula: string;
    terminoColegio: boolean;
    tieneAntecedentes: boolean;
  
  }

export interface Universidad {
        id:number;
        nombre:string;
    }

export interface PersonaUniversidad{
    id:number;
    persona: Persona;
    universidad:Universidad;
}

interface Props {
  showModal: boolean
  onCloseModal: (st: boolean) => void,
  studentList: PersonaUniversidad[],
  setStudentsList: (st: PersonaUniversidad[]) => void,
}

  interface Props{
    selectedStudent:PersonaUniversidad,
    studentList: PersonaUniversidad[],
    setStudentsList: (st: PersonaUniversidad[]) => void,
    showModal: boolean
    onCloseModal: (st:boolean) => void,

}

function randomId() {
  return Math.floor(Math.random()
    * (100 - 1 + 1)) + 1;
}

export const LotesEditForm:FC<Props>= ({showModal,onCloseModal,selectedStudent,studentList,setStudentsList})=>{
  const [studentName, setStudentName] = useState('');
  const [studentApellido, setStudentApellido] = useState('');
  const [studentCi, setStudentCi] = useState('');
  const [studentLevel, setStudentLevel] = useState(false);
  const [studentAntecedents, setStudentAntecedents] = useState(false);
  const [studentUniversity, setStudentUniversity] = useState('');

  const onSubmitButton = (event: { preventDefault: () => void; }) => {
    event.preventDefault();


    const customid: number = randomId();
    const updatedStudent: PersonaUniversidad = {
      id: customid,
      persona: {
        nombre: studentName,
        apellido: studentApellido,
        cedula: studentCi,
        terminoColegio: studentLevel,
        tieneAntecedentes: studentAntecedents,
      },
      universidad: {
        id: customid,
        nombre: studentUniversity
      }
    };


    studentList = studentList.filter(estudiante => estudiante.persona.cedula !== selectedStudent.persona.cedula);
    studentList.push(updatedStudent);
    setStudentsList(studentList);
    onCloseModal(false);


    setStudentUniversity('')
    // Aquí puedes enviar 'newStudent' a tu servidor o realizar la acción que necesites.
  };

  return (
    <>
      <Modal show={showModal} size="md" onClose={()=>onCloseModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
        <form onSubmit={onSubmitButton} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Actualizar estudiante</h3>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="student-name" value="Nombres" />
              </div>
              <TextInput
                id="student-name"
                defaultValue={selectedStudent.persona?.nombre}
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="student-apellido" value="Apellidos" />
              </div>
              <TextInput id="student-apellido" 
              defaultValue={selectedStudent.persona?.apellido}
              type="text" onChange={(e) => setStudentApellido(e.target.value)} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="student-ci" value="Documento identificatorio" />
              </div>
              <TextInput id="student-ci"       defaultValue={selectedStudent.persona?.cedula}

              onChange={(e) => setStudentCi(e.target.value)} />
            </div>
            <div>
              <div className="mb-2 block">
                <ToggleSwitch defaultChecked={ selectedStudent.persona.terminoColegio} checked={ studentLevel } label="Cumplio la educacion media?" onChange={setStudentLevel} />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <ToggleSwitch defaultChecked={ selectedStudent.persona.tieneAntecedentes} checked={studentAntecedents} label="Tiene antecedentes? " onChange={setStudentAntecedents} />
              </div>
            </div>


            <div>
              <div className="mb-2 block">
                <Label htmlFor="student-university" value="Universidad/facultad" />
              </div>
              <Select  id="student-university" onChange={(e) => setStudentUniversity(e.target.value)} required>
                <option >Selecciona una opcion</option>
                <option>Universidad Nacional de Asuncion</option>
                <option>Universidad Autonoma de Asuncion</option>
                <option>Universidad Catolica </option>
                <option>Universidad Columbia</option>
              </Select>
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="file" value="Cargar matricula" />
              </div>
              <FileInput id="file" helperText="Carga el certificado de matriculacion" />
            </div>
            <div className=" flex w-full">
              <Button type="submit">Actualizar estudiante</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

