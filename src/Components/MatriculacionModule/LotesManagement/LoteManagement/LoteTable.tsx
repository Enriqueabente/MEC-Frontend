import { Table, Button, Badge } from "flowbite-react"
import { FC } from "react"


interface LoteMatricula{
    nombre:string;
    apellido:string;
    cedula:string;
    escuelaMedia:boolean;
    status:string;
}


export const LoteTable:FC=()=>{
    const matriculas: LoteMatricula[]=[
      {nombre:'luis',apellido:'abente',cedula:'5784652',escuelaMedia:true,status:'Correcto'}
    ]
    return<>
        <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Nombre </Table.HeadCell>
          <Table.HeadCell>Apellido</Table.HeadCell>
          <Table.HeadCell>Cedula</Table.HeadCell>
          <Table.HeadCell>Escuela Media</Table.HeadCell>
          <Table.HeadCell>Estado</Table.HeadCell>
          <Table.HeadCell>
            <span className=""></span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {
          matriculas.length >0 && <>
             {matriculas.map((rowData, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{rowData.nombre}</Table.Cell>
              <Table.Cell>{rowData.apellido}</Table.Cell>
              <Table.Cell>{rowData.cedula}</Table.Cell>
              <Table.Cell><div className="flex flex-wrap ">
              {rowData.escuelaMedia && <Badge color="success">Correcto</Badge>} 
              {!rowData.escuelaMedia && <Badge color="failure">Rechazado</Badge>}
              </div>
               </Table.Cell>
              <Table.Cell>{rowData.status}</Table.Cell>
              <Table.Cell>
                <div className="flex space-x-2">
                  <Button size='xs' color='success'>Ver detalle</Button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}


          </>
        }
                {
          matriculas.length ==0 && <>
             <div className="flex ">
             <div className=" w-full"> 
                  No hay registro
                </div>
             </div>
            
          
          </>
        }

       
        </Table.Body>
      </Table>
    </div>
    </>
}