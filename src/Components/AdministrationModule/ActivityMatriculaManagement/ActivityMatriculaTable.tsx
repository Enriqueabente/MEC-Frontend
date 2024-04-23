import { Table, Button } from "flowbite-react";
import { FC, useEffect } from "react";
import { EventMatricula } from "../../../models/Auditoria";
import { get } from "../../../api/api";
import { useCrudContext } from "../../../hooks/useCrudContext";



export const ActivityMatriculaTable: FC = () => {
  const { currentPage, rowsPerPage, setTotalItems, itemList, setItemList } = useCrudContext<EventMatricula>();
  const startIndex = (currentPage - 1) * rowsPerPage;



  const visibleUsers: EventMatricula[] = itemList.slice(startIndex, startIndex + rowsPerPage);

  useEffect(() => {
    const fetchMatriculasEvents = async () => {
      try {
        const response = await get('/audit');
        if (response.status === 200) {
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
          <Table.HeadCell>Tipo de evento</Table.HeadCell>
          <Table.HeadCell>Usuario responsable</Table.HeadCell>
          <Table.HeadCell>Registro asociado</Table.HeadCell>
          <Table.HeadCell>Fecha de creacion</Table.HeadCell>
          <Table.HeadCell>
            <span className=""></span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {visibleUsers.map((rowData, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{rowData.tipo}</Table.Cell>
              <Table.Cell>{rowData.user.username}</Table.Cell>
              <Table.Cell >{rowData.matricula.persona.nombres + " " + rowData.matricula.persona.apellidos + " - " + rowData.matricula.persona.numero_documento}</Table.Cell>
              <Table.Cell>{rowData.matricula.createdAt}</Table.Cell>
              <Table.Cell>
                <Button size='xs' color='blue'>Ver</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  </>
}


