import { Table, Button } from "flowbite-react";
import { FC } from "react";


export interface Lote {
  loteId: string;
  fecha: string;
  estado: string;

}


export const LotesTable: FC = () => {
  //const { currentPage, rowsPerPage, setTotalItems } = useLoteManagementPageContext();

  //const startIndex = (currentPage - 1) * rowsPerPage;


/*
  const userList: UserInfo[] = [
    {
      "username": "admin",
      "email": "",
      "password": "$2a$10$PudW5vTLMnZH7KAVjRYBuOualWlUa2eYBD/t8WIAUyHf4oeLHGeyK",
      "cuentaNoExpirada": true,
      "sede": null,
      "cuentaNoBloqueada": true,
      "credencialesNoExpirados": true,
      "cuentaActiva": true,
      "rol": {
        "name": "MEC_ADMIN",
        "permisos": [
          {
            "name": "OBTENER_CUALQUIER_UNIVERSIDAD",
            "createdAt": "2024-02-24T21:06:29.849251Z",
            "updatedAt": "2024-02-24T21:06:29.849258Z"
          },
          {
            "name": "LISTAR_TODAS_LAS_UNIVERSIDADES",
            "createdAt": "2024-02-24T21:06:29.836316Z",
            "updatedAt": "2024-02-24T21:06:29.836324Z"
          },
          {
            "name": "VER_MI_UNIVERSIDAD",
            "createdAt": "2024-02-24T21:06:29.853708Z",
            "updatedAt": "2024-02-24T21:06:29.853714Z"
          },
          {
            "name": "REGISTRAR_USUARIO_UNIVERSIDADES",
            "createdAt": "2024-02-24T21:06:29.862052Z",
            "updatedAt": "2024-02-24T21:06:29.862063Z"
          },
          {
            "name": "AUDITAR_MATRICULACIONES",
            "createdAt": "2024-02-24T21:06:29.890208Z",
            "updatedAt": "2024-02-24T21:06:29.890219Z"
          },
          {
            "name": "VER_MATRICULACIONES",
            "createdAt": "2024-02-24T21:06:29.880175Z",
            "updatedAt": "2024-02-24T21:06:29.880184Z"
          },
          {
            "name": "REGISTRAR_USUARIO_ADMIN",
            "createdAt": "2024-02-24T21:06:29.858237Z",
            "updatedAt": "2024-02-24T21:06:29.858244Z"
          },
          {
            "name": "DELETE_ALL",
            "createdAt": "2024-02-24T21:06:29.845292Z",
            "updatedAt": "2024-02-24T21:06:29.845299Z"
          },
          {
            "name": "ACTUALIZAR_CUALQUIER_UNIVERSIDAD",
            "createdAt": "2024-02-24T21:06:29.840997Z",
            "updatedAt": "2024-02-24T21:06:29.841005Z"
          },
          {
            "name": "AUDITAR_LOGUEOS",
            "createdAt": "2024-02-24T21:06:29.895926Z",
            "updatedAt": "2024-02-24T21:06:29.895936Z"
          },
          {
            "name": "CREAR_ROL",
            "createdAt": "2024-02-24T21:06:29.870586Z",
            "updatedAt": "2024-02-24T21:06:29.870596Z"
          },
          {
            "name": "ACTUALIZAR_USUARIO_SEDE",
            "createdAt": "2024-02-24T21:06:29.865998Z",
            "updatedAt": "2024-02-24T21:06:29.866004Z"
          },
          {
            "name": "CREAR_MATRICULA",
            "createdAt": "2024-02-24T21:06:29.875604Z",
            "updatedAt": "2024-02-24T21:06:29.875618Z"
          },
          {
            "name": "CREAR_UNIVERSIDAD",
            "createdAt": "2024-02-24T21:06:29.821384Z",
            "updatedAt": "2024-02-24T21:06:29.821394Z"
          },
          {
            "name": "ACTUALIZAR_MATRICULACIONES",
            "createdAt": "2024-02-24T21:06:29.884476Z",
            "updatedAt": "2024-02-24T21:06:29.884484Z"
          }
        ],
        "descripcion": "Administrador del MEC",
        "createdAt": "2024-02-24T21:06:29.909422Z",
        "updatedAt": "2024-02-24T21:06:29.909434Z"
      },
      "intentosFallidos": 0,
      "createdAt": "2024-02-24T21:06:29.996156Z",
      "updatedAt": "2024-02-24T21:06:29.996169Z",
      "enabled": true,
      "authorities": [
        {
          "authority": "ACTUALIZAR_CUALQUIER_UNIVERSIDAD"
        },
        {
          "authority": "VER_MI_UNIVERSIDAD"
        },
        {
          "authority": "CREAR_MATRICULA"
        },
        {
          "authority": "MEC_ADMIN"
        },
        {
          "authority": "CREAR_ROL"
        },
        {
          "authority": "DELETE_ALL"
        },
        {
          "authority": "CREAR_UNIVERSIDAD"
        },
        {
          "authority": "OBTENER_CUALQUIER_UNIVERSIDAD"
        },
        {
          "authority": "LISTAR_TODAS_LAS_UNIVERSIDADES"
        },
        {
          "authority": "REGISTRAR_USUARIO_UNIVERSIDADES"
        },
        {
          "authority": "AUDITAR_LOGUEOS"
        },
        {
          "authority": "AUDITAR_MATRICULACIONES"
        },
        {
          "authority": "VER_MATRICULACIONES"
        },
        {
          "authority": "ACTUALIZAR_MATRICULACIONES"
        },
        {
          "authority": "ACTUALIZAR_USUARIO_SEDE"
        },
        {
          "authority": "REGISTRAR_USUARIO_ADMIN"
        }
      ],
      "accountNonExpired": true,
      "accountNonLocked": true,
      "credentialsNonExpired": true

    }]
*/


  //setTotalItems(userList.length)

  //const visibleUsers: UserInfo[] = userList.slice(startIndex, startIndex + rowsPerPage);

  const visibleUser: Lote[]=[{loteId:"lote-150",fecha:"12-02-2024",estado:"Finalizado"}]

  return <>
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Lote</Table.HeadCell>
          <Table.HeadCell>Fecha</Table.HeadCell>
          <Table.HeadCell>Estado</Table.HeadCell>
          <Table.HeadCell>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {visibleUser.map((rowData, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{rowData.loteId}</Table.Cell>
              <Table.Cell>{rowData.fecha}</Table.Cell>
              <Table.Cell>{rowData.estado}</Table.Cell>
              <Table.Cell>

                <div className="flex space-x-2">
                  <Button size='xs' color='blue'>Revision</Button>
                </div>

              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  </>
}


