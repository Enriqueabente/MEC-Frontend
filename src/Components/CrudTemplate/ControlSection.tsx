import { FC } from "react"
//import { useAuthContext } from "../../hooks/useAuthContext";
import { Button } from "flowbite-react";
import { useCrudContext } from "../../hooks/useCrudContext";

export const ControlSection: FC = () => {  
    const { setOpenAddModal, setOpenSearchModal, rowsPerPage, setRowsPerPage } = useCrudContext();
  
    const handleRowsPerPageChange = (e: { target: { value: string; }; }) => {
      setRowsPerPage(parseInt(e.target.value, 10));
    };
    return (
      <div className='flex flex-row-reverse justify-between items-start mt-2 mb-2 space-x-4'>
        <div className="flex ">
          <Button color="blue" onClick={() => setOpenSearchModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
          </Button>
          <div className=" flex  items-center">
            <select value={rowsPerPage} onChange={handleRowsPerPageChange} className="mx-2 rounded-md text-slate-400">
              {[5, 10, 15, 20, 25, 30].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
  
  
          <Button color="blue" onClick={() => setOpenAddModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </Button>
  
  
      </div>
    );
  };