import { Button } from "flowbite-react"
import { FC } from "react"




export const LoteResume: FC = () => {
    return <>

        <section className="flex justify-between items-end p-4">

            <div className="resumeinfo flex flex-col">

                <div className="title text-3xl pb-5"> Lote 123</div>


                <div className="total flex justify-between ">
                    <div className="flex-1 w-32">Total</div>
                    <div className="font-semibold ">100</div>
                </div>
                <div className="Success flex justify-between">
                    <div className="flex-1 w-32">Correctos</div>
                    <div className="font-semibold text-green-600">95</div>
                </div>
                <div className="Fail flex justify-between">
                    <div className="flex-1 w-32">Rechazados</div>
                    <div className=" font-semibold text-red-600">05</div>
                </div>
            </div>





            <div className="buttonSection flex space-x-4 ">

                <Button color="blue" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                    </svg>
                </Button>
                <div className=" flex  items-center">
                    <select className="mx-2 rounded-md text-slate-400">
                        {[5, 10, 15, 20, 25, 30].map((value) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>

                <Button size='xs' color="blue" className="text-white">
                    Realizar RollBack
                </Button>
                <Button size='xs' color="blue" className="text-white">
                    Descargar reporte
                </Button>
            </div>

        </section>

    </>
}