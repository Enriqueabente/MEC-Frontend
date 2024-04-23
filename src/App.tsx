
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './Layouts/MainLayout'
import { HomeLayout } from './Layouts/HomeLayout'
import { AdministratorLayout } from './Layouts/AdministratorLayout'
import { LoginPage } from './Pages/LoginPage'
import { RoleManagementPage } from './Pages/AdministratorModule/RoleManagementPage'
import { UserManagementPage } from './Pages/AdministratorModule/UserManagementPage'
//import { checkAuthLoader} from './utils/Auth'
import { MatriculasLayout } from './Layouts/MatriculasLayout'
import { MatriculasPage } from './Pages/MatriculasModule/MatriculasPage'
import { LotesPage } from './Pages/MatriculasModule/LotesPage'
import { ActivityMatriculaManagementPage } from './Pages/AdministratorModule/ActivityMatriculasManagementPage'
import { ActivitySesionManagementPage } from './Pages/AdministratorModule/ActivitySesionsManagementPage'
import { checkAuthLoader } from './utils/Auth'
import { AuthContextProvider } from './hooks/AuthContext'

const router = createBrowserRouter([

  {
    path: '/',
    element: <MainLayout></MainLayout>,
    loader: checkAuthLoader,
    children: [
      { index: true, element: <HomeLayout></HomeLayout> },

      {
        path: 'administracion',
        element: <AdministratorLayout></AdministratorLayout>,
        children: [
          {
            path: 'usuarios',
            element: <UserManagementPage></UserManagementPage>
          },
          {
            path: 'roles',
            element: <RoleManagementPage></RoleManagementPage>
          },
          {
            path: 'actividades',
            element: <ActivitySesionManagementPage></ActivitySesionManagementPage>
          },
          {
            path: 'actividadmatricula',
            element: <ActivityMatriculaManagementPage></ActivityMatriculaManagementPage>
          }

        ]
      },
      {
        path: 'matriculas/*',
        element: <MatriculasLayout></MatriculasLayout>

        , children: [
          {
            path: 'lista',
            element: <MatriculasPage></MatriculasPage>
          },
          {
            path: 'lotes',
            element: <LotesPage></LotesPage>
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    element: <LoginPage></LoginPage>,
  },
  
])


function App() {
  return <AuthContextProvider>
  <RouterProvider router={router} />
  </AuthContextProvider>;

}


export default App
