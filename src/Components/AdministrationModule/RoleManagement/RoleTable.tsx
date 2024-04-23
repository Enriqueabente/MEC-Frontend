import { Table } from "flowbite-react";
import { FC, useEffect } from "react";
import { get } from "../../../api/api";

import { Role } from "../../../models/RolesPermisos";
import { useCrudContext } from "../../../hooks/useCrudContext";

export const RoleTable: FC = () => {
  const { currentPage, rowsPerPage, setTotalItems, itemList,setItemList } = useCrudContext<Role>();

  const startIndex = (currentPage - 1) * rowsPerPage;

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await get('/administracion/roles');
        if (response.status === 200) {
          setItemList(response.data)
          setTotalItems(response.data.length)

        } else {
          // Manejar el error
          console.error('Error al obtener los roles:', response);
        }

      } catch (error) {
        console.error('Exception: ', error);
      }
    }

    fetchData();

  }, []
  )



  const visibleRoles: Role[] = itemList.slice(startIndex, startIndex + rowsPerPage);


  return <>
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Descripcion</Table.HeadCell>
          <Table.HeadCell>Fecha de creacion</Table.HeadCell>
          <Table.HeadCell>Fecha de actualizacion</Table.HeadCell>

        </Table.Head>
        <Table.Body className="divide-y">
          {visibleRoles.map((rowData, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{rowData.name}</Table.Cell>
              <Table.Cell>{rowData.descripcion}</Table.Cell>
              <Table.Cell>{rowData.createdAt}</Table.Cell>
              <Table.Cell>{rowData.updatedAt}</Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  </>
}


