import { Table, Badge, Button } from "flowbite-react";
import { FC } from "react"
import { useCrudContext } from "./context/UseCrudContext";
import { Reservacion } from "../../Pages/CrudPage";



export const TableSection: FC = () => {
    const { currentPage, rowsPerPage, itemList,setItemList, selectedItem } = useCrudContext<Reservacion>();
    const startIndex = (currentPage - 1) * rowsPerPage;


    function handleVerButton() {

        const listOfReservaciones:Reservacion[]=[
            {
                nombre:"Jose",
                apellido:"Gonzalez",
                cedula:"6546",
                estado:"Activo",
                telefono:"4465546",
            }
        ]
        
        setItemList(listOfReservaciones);
        console.log("Prev:" + JSON.stringify(selectedItem))
        console.log("Desp:" + JSON.stringify(selectedItem))

    }



    const visibleItems: Reservacion[] = itemList.slice(startIndex, startIndex + rowsPerPage);


    return <>
    <Button onClick={()=>handleVerButton()}> AGREGAR</Button>
        <div className="overflow-x-auto">
            <Table striped>
                <Table.Head>
                    <Table.HeadCell>Titular</Table.HeadCell>
                    <Table.HeadCell>Cedula</Table.HeadCell>
                    <Table.HeadCell>Telefono</Table.HeadCell>
                    <Table.HeadCell>Estado </Table.HeadCell>
                    <Table.HeadCell><span className="">Opciones</span></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {visibleItems.map((rowData, index) => (
                        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>{rowData.nombre + " " + rowData.apellido}</Table.Cell>
                            <Table.Cell>{rowData.cedula}</Table.Cell>
                            <Table.Cell >{rowData.telefono}</Table.Cell>
                            <Table.Cell>
                                <Badge color={
                                    rowData.estado === "Pendiente" ? "warning" :
                                        rowData.estado === "Completado" ? "success" :
                                            rowData.estado === "Cancelado" ? "failure" : ""
                                }>{rowData.estado}</Badge>




                            </Table.Cell>

                            <Table.Cell>

                                <div className="flex space-x-2">
                                    <Button size='xs' color='blue'>Ver</Button>
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