'use client';

import { Button, Label, TextInput, Select } from 'flowbite-react';
import { FC, useEffect, useState } from 'react';
import { get, post } from '../../../../api/api';
import { UnidadAcademica } from '../../../../models/UnidadesAcademicas';
import { Role } from '../../../../models/RolesPermisos';
import { useCrudContext } from '../../../../hooks/useCrudContext';
import { UserInfo } from '../../../../models/Auditoria';



interface Sede{
  id:number;
  name:string;
}



interface FormData {
  username: string;
  email: string;
  nombre: string;
  password: string;
  sede: Sede;
  role: string;
}

interface crearUsuarioSede {
  username: string;
  password: string;
  nombre:string;
  email: string;
  sede: { id: number };
  rol: { name: string };
}
interface crearUsuarioAdmin {
  username: string;
  nombre:string;
  password: string;
  email: string;
  rol: { name: string };
}



export const UserCreateForm: FC = () => {
  //UseContexts y UseStates
  const {setOpenAddModal,setTotalItems,setItemList } = useCrudContext<UserInfo>();
  const [roleOptions, setRoleOptions] = useState<Role[]>([{
    name: '',
    descripcion: '',
    permisos: [],
    createdAt: 0,
    updatedAt: 0,
  }])
  const [unidadAcademicaOptions, setUnidadAcademicaOptions] = useState<UnidadAcademica[]>([])

  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    nombre: '',
    password: '',
    sede: {id:0,name:""},
    role: '',
  });

  //UserEffect -> Para traer los datos del servidor

  useEffect(() => {

    const fetchUnidadesAcademicas = async () => {
      try {
        const response = await get('/unidad_academica');
        if (response.status === 200) {
          console.log(response.data)
          setUnidadAcademicaOptions(response.data)

        } else {
          // Manejar el error
          console.error('Error al obtener la lista de unidades academicas', response);
        }
      } catch (error) {
        console.error('Exception: ', error);
      }
    }

    const fetchRoles = async () => {
      try {
        const response = await get('/administracion/roles');
        if (response.status === 200) {
          setRoleOptions(roleOptions.concat(response.data))

        } else {
          // Manejar el error
          console.error('Error al obtener la lista de roles', response);
        }
      } catch (error) {
        console.error('Exception: ', error);
      }
    }

    fetchUnidadesAcademicas();
    fetchRoles();

  }, []
  )



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
           [id]: id === "sede" ? { id: value, name: "" } : value,
      }));

    
    console.log(formData)
  };

  const onSubmitButton = async (event: React.FormEvent) => {
    event.preventDefault();


    const postNewUser=async ()=>{
      try {
        let response;
        if (formData.role === 'MEC_ADMIN') {
          const body: crearUsuarioAdmin = {
            username: formData.username,
            password: formData.password,
            nombre:formData.nombre,
            email: formData.email,
            rol: { name: formData.role }
          }
  
          console.log("bodyadmin:" + body)
          response = await post('/auth/register_mec_admin', body);
        } else {
          const body: crearUsuarioSede = {
            username: formData.username,
            password: formData.password,
            nombre:formData.nombre,
            email: formData.email,
            sede: { id: formData.sede.id},
            rol: { name: formData.role }
  
          }
          console.log("bodysede:" + body)
  
          response = await post('/auth/register_sede_user', body);
        }
  
        if (response.status === 200) {
          console.log('Registro exitoso');
          setFormData({
            username: '',
            email: '',
            nombre: '',
            password: '',
            sede: {id:0,name:''},
            role: '',
          });
  
          setOpenAddModal(false);
        } else {
          console.error('Error al registrar el usuario');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    }
    const getUserList = async () => {
      try {
        const response = await get('/administracion/usuario');
        console.log("Respuesta: " + response)
        if (response.status === 200) {
          setItemList(response.data)
          setTotalItems(response.data.length)
        } else {
          // Manejar el error
          console.error('Error al crear usuario:', response);
        }
      } catch (error) {
        console.error('Error al crear usuario:', error);
      }
    }
    await postNewUser();
    await getUserList();
    setOpenAddModal(false);
  };

  return (
    <>
          <form onSubmit={onSubmitButton} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white col-span-2">
              Registrar nuevo usuario
            </h3>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="user-name" value="Username" />
              </div>
              <TextInput
                id="username"
                value={formData.username}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="user-email" value="Correo electrónico" />
              </div>
              <TextInput
               type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="user-nombre" value="Nombres y apellido" />
              </div>
              <TextInput
                id="nombre"
                value={formData.nombre}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="user-password" value="Contraseña" />
              </div>
              <TextInput
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="user-role">Selecciona un rol para el usuario</Label>
              </div>
              <Select
                id="role"
                value={formData.role}
                onChange={(e) => handleChange(e)}
                required
              >
                {roleOptions.map((option) => (
                  <option key={option.name} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </Select>
            </div>

            {formData.role != 'MEC_ADMIN' && <>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="user-sede">Unidad academica</Label>
                </div>
                <Select
                  id="sede"
                  value={formData.sede.id}
                  onChange={(e) => handleChange(e)}
                  required
                >
                  {unidadAcademicaOptions.map((option) => (
                    <option key={option.id} value={option.sedes[0].id}>
                      {option.universidad.nombre + "-" + option.nombre + "-" + option.sedes[0].departamento + "-" + option.sedes[0].distrito}
                    </option>
                  ))}
                </Select>
              </div>
            </>}

            <div className="col-span-2 flex justify-center">
              <Button type="submit">Crear</Button>
            </div>
          </form>
    </>
  );
};
