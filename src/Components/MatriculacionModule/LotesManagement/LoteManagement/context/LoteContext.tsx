import { ReactNode, createContext, useState } from "react";

export interface LoteContextProps<T> {
    openAddModal: boolean;
    setOpenAddModal: (state: boolean) => void;
    openSearchModal: boolean;
    setOpenSearchModal: (state: boolean) => void;
    openEditModal: boolean;
    setOpenEditModal: (state: boolean) => void;
    openDeleteModal: boolean;
    setOpenDeleteModal: (state: boolean) => void;
    openViewModal: boolean;
    setOpenViewModal: (state: boolean) => void;
    itemList:T[],
    setItemList:(state:T[]) => void;
    rowsPerPage: number;
    setRowsPerPage: (state: number) => void;
    currentPage: number;
    setCurrentPage: (state: number) => void;
    totalItems: number;
    setTotalItems: (state: number) => void;
    selectedItem:T|null;
    setSelectedItem:(state: T) => void;
  }

  const defaultContextValue = {
    openAddModal: false,
    setOpenAddModal: () => {},
    openEditModal: false,
    setOpenEditModal: () => {},
    openSearchModal: false,
    setOpenSearchModal: () => {},
    openDeleteModal: false,
    setOpenDeleteModal: () => {},
    openViewModal: false,
    setOpenViewModal: () => {},
    itemList: [],
    setItemList: () => {},
    selectedItem: null,
    setSelectedItem: () => {},
    rowsPerPage: 5,
    setRowsPerPage: () => {},
    currentPage: 1,
    setCurrentPage: () => {},
    totalItems: 0,
    setTotalItems: () => {},
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const LoteContext = createContext<LoteContextProps<any>>(defaultContextValue);


  export const LoteContextProvider = <T extends object>({ children }: { children: ReactNode }) => {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openSearchModal, setOpenSearchModal] = useState(false);
    const [openViewModal, setOpenViewModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(1);
    const [itemList, setItemList] = useState<T[]>([]);
    const [selectedItem, setSelectedItem] = useState<T| null >(null);
    
    const state: LoteContextProps<T> = {
        openAddModal,
        setOpenAddModal,
        openEditModal,
        setOpenEditModal,
        openDeleteModal,
        setOpenDeleteModal,
        openSearchModal,
        setOpenSearchModal,
        openViewModal,
        setOpenViewModal,
        rowsPerPage,
        setRowsPerPage,
        currentPage,
        setCurrentPage,
        totalItems,
        setTotalItems,
        itemList,
        setItemList,
        selectedItem,
        setSelectedItem,
      };

      return <LoteContext.Provider value={state}>{children}</LoteContext.Provider>;
    };