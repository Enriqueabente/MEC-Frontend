import { FC } from "react"
import { ActivitySesionTable } from "../../Components/AdministrationModule/ActivitySesionManagement/ActivitySesionTable"
import { ActivitySesionViewForm } from "../../Components/AdministrationModule/ActivitySesionManagement/Forms/ActivitySesionViewForm"
import { CrudContextProvider } from "../../hooks/CrudContext"
import { EventLogin } from "../../models/Auditoria"
import { ControlSection } from "../../Components/CrudTemplate/ControlSection"
import { PaginationSection } from "../../Components/CrudTemplate/PaginationSection"
import { ViewModal } from "../../Components/CrudTemplate/modals/ViewModal"
import { FilterModal } from "../../Components/CrudTemplate/modals/FilterModal"
import { ActivitySesionFilterForm } from "../../Components/AdministrationModule/ActivitySesionManagement/Forms/ActivitySesionFilterForm"

export const ActivitySesionManagementPage: FC = () => {
    return <>
        <CrudContextProvider<EventLogin>>
            <div className="flex flex-row ">
                <div className="container p-5 flex flex-col space-y-4">
                    <div className="PageTitle font-bold text-3xl">
                        Inicios de sesion de usuarios
                    </div>
                    <div className="TableSection flex flex-col p-1 bg-gray-200 rounded-md">
                        <ControlSection />
                        <ActivitySesionTable></ActivitySesionTable>
                        <PaginationSection></PaginationSection>
                    </div>

                    <FilterModal>
                        <ActivitySesionFilterForm />
                    </FilterModal>

                    <ViewModal>
                        <ActivitySesionViewForm />
                    </ViewModal>
                </div>
            </div>
        </CrudContextProvider>

    </>
}