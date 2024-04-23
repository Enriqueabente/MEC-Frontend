import { FC } from "react"
import { ActivityMatriculaTable } from "../../Components/AdministrationModule/ActivityMatriculaManagement/ActivityMatriculaTable"
import { ControlSection } from "../../Components/CrudTemplate/ControlSection"
import { PaginationSection } from "../../Components/CrudTemplate/PaginationSection"
import { FilterModal } from "../../Components/CrudTemplate/modals/FilterModal"
import { ViewModal } from "../../Components/CrudTemplate/modals/ViewModal"
import { CrudContextProvider } from "../../hooks/CrudContext"
import { EventMatricula } from "../../models/Auditoria"
import { ActivityMatriculaFilterForm } from "../../Components/AdministrationModule/ActivityMatriculaManagement/Forms/ActivityMatriculaFilterForm"
import { ActivityMatriculaViewForm } from "../../Components/AdministrationModule/ActivityMatriculaManagement/Forms/ActivityMatriculaViewForm"

export const ActivityMatriculaManagementPage: FC = () => {
    return <> 

    <CrudContextProvider<EventMatricula>>
            <div className="flex flex-row ">
                <div className="container p-5 flex flex-col space-y-4">
                    <div className="PageTitle font-bold text-3xl">
                    Monitoreo de acciones sobre matriculas
                    </div>
                    <div className="TableSection flex flex-col p-1 bg-gray-200 rounded-md">
                        <ControlSection />
                        <ActivityMatriculaTable></ActivityMatriculaTable>
                        <PaginationSection></PaginationSection>
                    </div>

                    <FilterModal>
                        <ActivityMatriculaFilterForm />
                    </FilterModal>

                    <ViewModal>
                        <ActivityMatriculaViewForm />
                    </ViewModal>
                </div>
            </div>
        </CrudContextProvider>
    
    </>
}