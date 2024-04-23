'use client';

import { Modal } from 'flowbite-react';
import { ReactNode } from 'react';
import { useCrudContext } from '../../../hooks/useCrudContext';

export const CreateModal= ({ children }: { children: ReactNode }) => {
  const { openAddModal, setOpenAddModal } = useCrudContext();
  return (
    <>
      <Modal show={openAddModal} size="7xl" onClose={() => setOpenAddModal(false)} popup>
        <Modal.Header/>
        <Modal.Body>
            {children}
        </Modal.Body>
      </Modal>
    </>
  );
}