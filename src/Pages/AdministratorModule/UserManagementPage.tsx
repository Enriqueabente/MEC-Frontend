
import { FC } from "react"
import { UserTable } from "../../Components/AdministrationModule/UserManagement/UserTableSection";
import { CrudContextProvider } from "../../hooks/CrudContext";
import { UserInfo } from "../../models/Auditoria";
import { ControlSection } from "../../Components/CrudTemplate/ControlSection";
import { PaginationSection } from "../../Components/CrudTemplate/PaginationSection";
import { CreateModal } from "../../Components/CrudTemplate/modals/CreateModal";
import { UserCreateForm } from "../../Components/AdministrationModule/UserManagement/Forms/UserCreateForm";
import { ViewModal } from "../../Components/CrudTemplate/modals/ViewModal";
import { UserViewForm } from "../../Components/AdministrationModule/UserManagement/Forms/UserViewForm";

export const UserManagementPage: FC = () => {

    return <>
        <CrudContextProvider<UserInfo>>
            <div className="flex flex-row ">
                <div className="container p-5 flex flex-col space-y-4">
                    <div className="PageTitle font-bold text-3xl">
                        Gestionar de usuarios
                    </div>
                    <div className="TableSection flex flex-col p-1 bg-gray-200 rounded-md">
                        <ControlSection />
                        <UserTable></UserTable>
                        <PaginationSection></PaginationSection>
                    </div>

                    <CreateModal>
                        <UserCreateForm/>
                    </CreateModal>
                    <ViewModal>
                        <UserViewForm/>
                    </ViewModal>
                </div>
            </div>
        </CrudContextProvider>


    </>
}
