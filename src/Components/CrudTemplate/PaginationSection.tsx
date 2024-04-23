import { FC, useEffect } from "react"
import { Pagination } from "flowbite-react";
import { useCrudContext } from "../../hooks/useCrudContext";

export const PaginationSection:FC= ()=>{
    const {currentPage, rowsPerPage ,setCurrentPage,totalItems} = useCrudContext();

    const totalPages = Math.ceil(totalItems / rowsPerPage);
  
    useEffect(() => {
      setCurrentPage(1); // Resetear la página cuando cambia la cantidad de filas a mostrar
    }, [setCurrentPage]);
  
    const onPageChange = (page: number) => setCurrentPage(page);
  
    return (
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    );

}