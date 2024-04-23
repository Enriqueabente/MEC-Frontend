import { FC } from "react"
import { RoleCreateForm } from "../../Components/AdministrationModule/RoleManagement/Forms/RoleCreateForm"
import { RoleViewForm } from "../../Components/AdministrationModule/RoleManagement/Forms/RoleViewForm"
import { RoleTable } from "../../Components/AdministrationModule/RoleManagement/RoleTable"
import { CreateModal } from "../../Components/CrudTemplate/modals/CreateModal"
import { ViewModal } from "../../Components/CrudTemplate/modals/ViewModal"
import { CrudContextProvider } from "../../hooks/CrudContext"
import { ControlSection } from "../../Components/CrudTemplate/ControlSection"
import { PaginationSection } from "../../Components/CrudTemplate/PaginationSection"
import { Role } from "../../models/RolesPermisos"

export const RoleManagementPage: FC = () => {
    return <> 

        <CrudContextProvider<Role>>
            <div className="flex flex-row ">
                <div className="container p-5 flex flex-col space-y-4">
                    <div className="PageTitle font-bold text-3xl">
                     Gestionar de roles
                    </div>
                    <div className="TableSection flex flex-col p-1 bg-gray-200 rounded-md">
                        <ControlSection />
                        <RoleTable></RoleTable>
                        <PaginationSection></PaginationSection>
                    </div>

                    <CreateModal>
                        <RoleCreateForm/>
                    </CreateModal>
                    <ViewModal>
                        <RoleViewForm/>
                    </ViewModal>
                </div>
            </div>
        </CrudContextProvider>
    
    </>
}
