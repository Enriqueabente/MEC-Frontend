import { Button, FooterDivider, Label, Select, TextInput, ToggleSwitch } from 'flowbite-react';
import { FC, useEffect, useState } from 'react';
import { get, post } from '../../../../api/api';
import { useCreateMatriculaContext } from '../context/useMatriculaCreateFlowContext';
import { UnidadAcademica } from '../../../../models/UnidadesAcademicas';
import { useCrudContext } from '../../../../hooks/useCrudContext';

interface Form1Data {
    DocumentType: string;
    DocumentValue: string;
}

const defaultValue: Form1Data = {
    DocumentType: "",
    DocumentValue: ""
}



export const Step1FormulariodeSolicitudDeDocumento: FC = () => {
    const { setPersona, setActiveStep, setShowStep1, setShowStep2, showStep1 } = useCreateMatriculaContext();
    const [formData, setFormData] = useState<Form1Data>(defaultValue)
    const [showError, setShowError] = useState(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));


        console.log(formData)
    };

    const onSubmitButton = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const fetchPersona = async () => {
            try {
                const response = await get('/persona/' + formData.DocumentValue);

                if (response.status === 200) {
                    console.log(response.data)
                    setPersona(response.data);
                    setActiveStep(2);
                    setShowStep1(false);
                    setShowStep2(true);
                    setShowError(null);
                    //2-Se oculta el formulario1
                    //3-Se setea los valores de la persona al estado correspondiente
                    //4-Se muestra el paso2
                } else {
                    setShowError(response.data);

                    // Manejar el error
                    console.error('Error al obtener la lista de unidades academicas', response.statusText);
                }
            } catch (error) {
                console.error('Exception: ', error);
            }
        }
        fetchPersona()

        console.log(formData)
    };


    return <>
        {showStep1 && <>
            <div className='m-4'>
                <form onSubmit={onSubmitButton} className="space-y-6">
                    <h3 className="text-4xl font-medium text-gray-900 dark:text-white">Consultar estado del estudiante</h3>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="DocumentType" value="Tipo de documento identificatorio" />
                        </div>
                        <Select id="DocumentType"
                            value={formData.DocumentType}
                            onChange={(e) => handleChange(e)}
                            required
                        >
                            <option value={"selecciona"}>Selecciona</option>
                            <option value={"CI-Paraguay"}>CI-Paraguay</option>
                        </Select>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="DocumentValue" value="Documento identificatorio" />
                        </div>
                        <TextInput id="DocumentValue" value={formData.DocumentValue}
                            onChange={(e) => handleChange(e)}
                            placeholder='Ingresa el numero de documento'
                            required />
                    </div>

                    <div className=" flex w-full justify-end">
                        <Button type="submit">Validar</Button>
                    </div>
                </form >

                <FooterDivider></FooterDivider>
                {showError &&
                    <div className='flex space-x-6 justify-start w-1/2'>
                        <p className='text-red-600 font-semibold'>Error: </p>
                        <p>                    {showError}
                        </p>

                    </div>

                }

            </div >


        </>}

    </>
}



export const Step2DatosDetalladosdelEstudiante: FC = () => {
    const { persona, setActiveStep, showStep2, setShowStep2, setShowStep3 } = useCreateMatriculaContext();


    const onSubmitButton = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        /*Se considera que el estudiante cumple con los prerequisito */
        console.log("pasnado al paso3")
        setActiveStep(3);
        setShowStep2(false);
        setShowStep3(true);

    };


    return <>
        {showStep2 && <>
            <div className='m-4'>
                <form onSubmit={onSubmitButton} className="space-y-6">
                    <h3 className="text-4xl font-medium text-gray-900 dark:text-white">Informacion basica </h3>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="student-name" value="Nombres" />
                        </div>
                        <TextInput
                            id="student-name"
                            value={persona.nombres}
                            disabled
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="student-apellido" value="Apellidos" />
                        </div>
                        <TextInput id="student-apellido" type="text" value={persona.apellidos} disabled />
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
                        <TextInput id="student-ci" value={persona.numero_documento} disabled />
                    </div>



                    <FooterDivider></FooterDivider>

                    <div className='flex'>

                        <div>
                            <h2 className="mb-4 text-4xl font-medium text-gray-900 dark:text-white">Estado</h2>
                            <ul className="max-w-md space-y-4 text-gray-500 list-inside dark:text-gray-400">


                                <li className="flex items-center">
                                    {persona.terminoColegio ?
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
                                    {persona.terminoColegio ?
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

                    </div>
                    <div className=" flex flex-row-reverse w-full">
                        <Button type="submit">Continuar</Button>
                    </div>
                </form>

            </div>
        </>}


    </>
}

export const Step3MatricularEstudiante: FC = () => {
    const { persona, showStep3, } = useCreateMatriculaContext();
    const { setOpenAddModal, setItemList, setTotalItems } = useCrudContext()
    const [unidadAcademicaOptions, setUnidadAcademicaOptions] = useState<UnidadAcademica[]>([])
    const [showError, setShowError] = useState(null);

    interface Form3Data {
        persona: { numero_documento: string },
        carrera: string;
        unidadAcademica: { id: number };
        materia: string;
        anhoLectivo: number;
        periodoLectivo: number;
        esCondicional: boolean;
    }
    const defaultValue: Form3Data = {
        persona: { numero_documento: persona.numero_documento },
        carrera: "",
        unidadAcademica: { "id": 0 },
        materia: "",
        anhoLectivo: 0,
        periodoLectivo: 0,
        esCondicional: false
    }
    //const { persona, setShowStep3 } = useCreateMatriculaContext();
    const [formData, setFormData] = useState<Form3Data>(defaultValue)

    useEffect(() => {

        const fetchUnidadesAcademicas = async () => {
            try {
                const response = await get('/unidad_academica');
                if (response.status === 200) {
                    setUnidadAcademicaOptions((response.data))

                } else {
                    // Manejar el error
                    console.error('Error al obtener la lista de unidades academicas', response);
                }
            } catch (error) {
                console.error('Exception: ', error);
            }
        }
        fetchUnidadesAcademicas()
    }, [])




    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: id === "unidadAcademica" ? { id: value } : value,
        }));
        console.log(formData)

    };


    const onEsCondiciolChange = () => {
        setFormData((prevData) => ({
            ...prevData,
            esCondicional: !formData.esCondicional
        }));
        console.log(formData)
    };



    const onSubmitButton = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const postMatricula = async () => {
            try {

                const body: Form3Data = { ...formData, persona: { numero_documento: persona.numero_documento } }


                const response = await post('/matricula', body);

                if (response.status === 200) {
                    console.log('Registro exitoso');
                    setFormData(defaultValue);
                    setShowError(null);

                } else {
                    console.error('Error al registrar el usuario');
                    setShowError(response.data);

                }
            } catch (error) {
                console.error('Error de red:', error);
            }
        }

        const fetchMatriculas = async () => {
            try {
                const response = await get('/matricula');
                if (response.status === 200) {
                    setItemList((response.data))
                    setTotalItems(response.data.length)

                } else {
                    // Manejar el error
                    console.error('Error al obtener la lista de matriculas', response);
                }
            } catch (error) {
                console.error('Exception: ', error);
            }
        }
        await postMatricula();
        await fetchMatriculas()
        console.log(formData);
        setOpenAddModal(false);
    };

    return <>

        {showStep3 && <>
            <div className='m-4'>
                <form onSubmit={onSubmitButton} className="space-y-6">
                    <h3 className="text-4xl font-medium text-gray-900 dark:text-white"> Datos de Matricula</h3>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="materia" value="Materia" />
                        </div>
                        <TextInput
                            id="materia"
                            value={formData.materia}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="unidadAcademica">Unidad academica</Label>
                        </div>
                        <Select
                            id="unidadAcademica"
                            value={formData.unidadAcademica.id}
                            onChange={(e) => handleChange(e)}
                            required
                        >
                            {unidadAcademicaOptions.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.universidad.nombre + "-" + option.nombre + "-" + option.sedes[0].departamento + "-" + option.sedes[0].distrito}
                                </option>
                            ))}
                        </Select>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="carreras" value="Carrera" />
                        </div>
                        <TextInput id="carrera" type="text" value={formData.carrera} onChange={(e) => handleChange(e)} />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="anhoLectivo" value="Año lectivo" />
                        </div>
                        <TextInput id="anhoLectivo" value={formData.anhoLectivo}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>

                        <ToggleSwitch id="esCondicional" checked={formData.esCondicional} label="Es condicional" onChange={onEsCondiciolChange} />

                    </div>

                    {showError &&
                        <div className='flex space-x-6 justify-start w-1/2'>
                            <p className='text-red-600 font-semibold'>Error: </p>
                            <p>                    {showError}
                            </p>

                        </div>

                    }


                    <FooterDivider></FooterDivider>

                    <div className=" flex flex-row-reverse w-full">
                        <Button type="submit">Crear matricula</Button>
                    </div>

                </form>

            </div>

        </>}


    </>
}