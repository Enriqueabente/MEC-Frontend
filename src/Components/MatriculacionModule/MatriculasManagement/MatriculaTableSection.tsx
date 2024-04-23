import { Table, Button, Badge } from "flowbite-react";
import { FC, useEffect } from "react";
import { Matricula } from "../../../models/Matriculacion";
import { get } from "../../../api/api";
import { useCrudContext } from "../../../hooks/useCrudContext";


export const MatriculaTable: FC = () => {
  const { currentPage, rowsPerPage, setTotalItems, itemList, setItemList, setSelectedItem, setOpenViewModal ,selectedItem} = useCrudContext<Matricula>();
  const startIndex = (currentPage - 1) * rowsPerPage;

  useEffect(() => {
    const fetchMatriculas = async () => {
      try {
        const response = await get('/matricula');
        if (response.status === 200) {
          setItemList((response.data))
          setTotalItems(response.data.length)
        } else {
          console.error('Error al obtener la lista de matriculas', response);
        }
      } catch (error) {
        console.error('Exception: ', error);
      }
    }
    fetchMatriculas()
  }, [])


  function handleVerButton(rowData:Matricula){
    
    console.log("Prev:"+ JSON.stringify(selectedItem))
    setSelectedItem(rowData);
    console.log("Desp:"+ JSON.stringify(selectedItem))
    setOpenViewModal(true);
  }


  const visibleItems: Matricula[] = itemList.slice(startIndex, startIndex + rowsPerPage);


  return <>
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Persona</Table.HeadCell>
          <Table.HeadCell>Unidad academica</Table.HeadCell>
          <Table.HeadCell>Sede</Table.HeadCell>
          <Table.HeadCell>Carrera </Table.HeadCell>
          <Table.HeadCell>Materia </Table.HeadCell>
          <Table.HeadCell>Es condicional </Table.HeadCell>
          <Table.HeadCell>Año lectivo</Table.HeadCell>
          <Table.HeadCell>Fecha de creacion</Table.HeadCell>
          <Table.HeadCell><span className="">Opciones</span></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {visibleItems.map((rowData, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{rowData.persona.nombres + " " + rowData.persona.apellidos}</Table.Cell>
              <Table.Cell>{rowData.unidadAcademica.universidad.nombre + "-" + rowData.unidadAcademica.nombre}</Table.Cell>
              <Table.Cell >{rowData.unidadAcademica.sedes[0].nombre + "-" + rowData.unidadAcademica.sedes[0].distrito}</Table.Cell>
              <Table.Cell>{rowData.carrera}</Table.Cell>
              <Table.Cell>{rowData.materia}</Table.Cell>
              <Table.Cell>{rowData.esCondicional ? <Badge color="failure">Si</Badge> : <Badge color="success">No</Badge>}</Table.Cell>
              <Table.Cell>{rowData.anhoLectivo}</Table.Cell>
              <Table.Cell>{rowData.createdAt}</Table.Cell>
              <Table.Cell>

                <div className="flex space-x-2">
                  <Button size='xs' color='blue' onClick={()=> handleVerButton(rowData)}>Ver</Button>
                  <Button size='xs' color='warning'>Editar</Button>
                  <Button size='xs' color='failure'>Anular</Button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  </>
}


