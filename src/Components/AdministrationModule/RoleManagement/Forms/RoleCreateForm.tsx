'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { FC, useEffect, useState } from 'react';
import { get, post,  } from '../../../../api/api';
import { Permiso, Role,  } from '../../../../models/RolesPermisos';
import { useCrudContext } from '../../../../hooks/useCrudContext';


interface PermissionData {
  name: string;
  checked: boolean;
}

interface FormData {
  name: string;
  descripcion: string;
  permisos: PermissionData[];

}

interface requestData {
  name: string;
  descripcion: string;
  permisos: Permiso[];
}


export const RoleCreateForm: FC = () => {
  //UseContexts y UseStates
  const { setOpenAddModal } = useCrudContext<Role>();
  const [permisosOptions, setPermisosOptions] = useState<Permiso[]>([{
    name:'',
    createdAt:'',
    updatedAt:'',
}])

  const [formData, setFormData] = useState<FormData>({
    name: '',
    descripcion: '',
    permisos: []
  });


  useEffect(() => {
    const fetchPermisos = async () => {
      try {
        const response = await get('/administracion/permisos');
        if (response.status === 200) {
          setPermisosOptions(response.data)
          setFormData((prevData) => ({
            ...prevData,
            permisos: response.data.map((option: { name: unknown; }) => ({ name: option.name, checked: false })),
          }));
        } else {
          // Manejar el error
          console.error('Error al obtener la lista de permisos', response);
        }
      } catch (error) {
        console.error('Exception: ', error);
      }
    }
    fetchPermisos();
  }, []
  )

  const handlePermissionChange = (permissionName: string, checked: boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      permisos: prevData.permisos.map((permission) =>
        permission.name === permissionName ? { ...permission, checked } : permission
      ),
    }));
    console.log(formData);

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    console.log(formData);
  };



  const onSubmitButton = async (event: React.FormEvent) => {
    event.preventDefault();

    const selectedPermissions = formData.permisos.filter((permission) => permission.checked);
    
    const selectedPermissionNames = selectedPermissions.map((permission) => ({
      name: permission.name,
    }));
    const body:requestData={name:formData.name,descripcion:formData.descripcion, permisos:selectedPermissionNames}

    console.log(body)
    
  
        try {
    
          const response = await post('/administracion/roles', body);
    
          console.log(response.status)
          if (response.status === 201) {
            console.log('Registro exitoso');
            setFormData({
              name: '',
              descripcion: '',
              permisos: permisosOptions.map((option) => ({ name: option.name, checked: false })),        });
    
            setOpenAddModal(false);
          } else {
            console.error('Error al registrar el rol');
          }
        } catch (error) {
          console.error('Error de red:', error);
        }
        
  };

  return (
    <>
        <form onSubmit={onSubmitButton}>
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
                <TextInput id="name" value={formData.name} onChange={(e) => handleChange(e)} />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Descripcion" />
                </div>
                <TextInput id="descripcion" value={formData.descripcion} onChange={(e) => handleChange(e)} />
              </div>
            </div>

            {/* lado derecho*/}
            <div className="lg:w-1/2 p-4">
              <div>
                <div className="mb-2 block">
                  <div className="font-semibold text-1xl"> Permisos del sistema</div>
                </div>

                {permisosOptions.map((option) => (
                  <div className="flex items-center gap-2" key={option.name}>
                    <Checkbox
                      id={option.name}
                      checked={formData.permisos.find((p) => p.name === option.name)?.checked || false}
                      onChange={(e) => handlePermissionChange(option.name, e.target.checked)}
                    />
                    <Label className="font-normal" htmlFor={option.name}>
                      {option.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2 flex justify-end pt-4">
            <Button color="blue" type="submit">
              Crear Rol
            </Button>
          </div>
        </form>
  </>
  );
};
