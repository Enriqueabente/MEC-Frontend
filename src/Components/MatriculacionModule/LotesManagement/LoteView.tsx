import { FC } from "react"
import { LoteResume } from "./LoteManagement/LoteResume"
import { LoteTable } from "./LoteManagement/LoteTable"

export const LoteView: FC = () => {
    return <>

        <div className="flex flex-row ">
            <div className="container p-5 flex flex-col space-y-4">
                <div className="PageTitle font-bold text-3xl">
                    Revision de Lote especifico
                </div>
                <div className="TableSection flex flex-col p-1 bg-gray-200 rounded-md">
                    <LoteResume></LoteResume>
                    <LoteTable></LoteTable>
                </div>
            </div>
        </div>

    </>
}