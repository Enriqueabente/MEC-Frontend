import { Table } from "flowbite-react";
import { FC, useEffect } from "react";
import { EventLogin } from "../../../models/Auditoria";
import { get } from "../../../api/api";
import { formatearFechaHora } from "../../../utils/stringsUtils";
import { useCrudContext } from "../../../hooks/useCrudContext";



export const ActivitySesionTable: FC = () => {
  const { currentPage, rowsPerPage, setTotalItems,setItemList,itemList } = useCrudContext<EventLogin>();
  const startIndex = (currentPage - 1) * rowsPerPage;


  const visibleSessions: EventLogin[] = itemList.slice(startIndex, startIndex + rowsPerPage);

  useEffect(() => {
    const fetchMatriculasEvents = async () => {
      try {
        const response = await get('/audit/successful_logins');
        if (response.status === 200) {
          console.log(response.data)

          setItemList(response.data)
          setTotalItems(response.data.length)
        } else {
          // Manejar el error
          console.error('Error al obtener la lista de eventos de matriculaciones', response);
        }
      } catch (error) {
        console.error('Exception: ', error);
      }
    }
    fetchMatriculasEvents();
  }, []
  )

  return <>
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Nombre de usuario</Table.HeadCell>
          <Table.HeadCell>Correo electronico</Table.HeadCell>
          <Table.HeadCell>Rol de usuario</Table.HeadCell>
          <Table.HeadCell>Fecha de Login</Table.HeadCell>
          <Table.HeadCell>Pertenece a</Table.HeadCell>
          <Table.HeadCell>Ip</Table.HeadCell>


        </Table.Head>
        <Table.Body className="divide-y">
          {visibleSessions.map((rowData, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{rowData.user.username}</Table.Cell>
              <Table.Cell>{rowData.user.email}</Table.Cell>
              <Table.Cell>{rowData.user.rol.name}</Table.Cell>
              <Table.Cell>{formatearFechaHora(parseFloat( rowData.loginTime))}</Table.Cell>
              <Table.Cell>{rowData.user.rol.name=="MEC ADMIN"?"MEC":rowData.user.sede?.universidad.nombre}</Table.Cell>
              <Table.Cell>{rowData.ipAddress}</Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  </>
}



