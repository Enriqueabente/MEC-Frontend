import { Table, Button } from "flowbite-react";
import { FC, useEffect } from "react";
import { get } from "../../../api/api";

import { UserInfo } from "../../../models/Auditoria";
import { useCrudContext } from "../../../hooks/useCrudContext";

export const UserTable: FC = () => {
  const { currentPage, rowsPerPage, setTotalItems, itemList, setItemList, setSelectedItem ,setOpenViewModal} = useCrudContext<UserInfo>();

  const startIndex = (currentPage - 1) * rowsPerPage;

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const response = await get('/administracion/usuario');
        if (response.status === 200) {
          setItemList(response.data)
          setTotalItems(response.data.length)

        } else {
          // Manejar el error
          console.error('Error al iniciar sesión:', response);
        }

      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
    }

    fetchUserData();

  }, []
  )


  function handleView(rowData: UserInfo) {
    setSelectedItem(rowData);
    setOpenViewModal(true);
    //state de mostrar el modal de ver
  }

  const visibleUsers: UserInfo[] = itemList.slice(startIndex, startIndex + rowsPerPage);


  return <>
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Nombre de usuario</Table.HeadCell>
          <Table.HeadCell>Correo electronico</Table.HeadCell>
          <Table.HeadCell>Contraseña</Table.HeadCell>
          <Table.HeadCell>Rol de usuario</Table.HeadCell>
          <Table.HeadCell>Fecha de creacion</Table.HeadCell>
          <Table.HeadCell>Pertenece a</Table.HeadCell>
          <Table.HeadCell>
            <span className="">Opciones</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {visibleUsers.map((rowData, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{rowData.username}</Table.Cell>
              <Table.Cell>{rowData.email}</Table.Cell>
              <Table.Cell className=" overflow-x-hidden " >{rowData.password}</Table.Cell>
              <Table.Cell>{rowData.rol.name}</Table.Cell>
              <Table.Cell>{rowData.createdAt}</Table.Cell>
              <Table.Cell>{rowData.sede?.nombre}</Table.Cell>
              <Table.Cell>

                <div className="flex space-x-2">
                  <Button size='xs' color='blue' onClick={() => { handleView(rowData) }}>Ver</Button>
  
                </div>

              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  </>
}


