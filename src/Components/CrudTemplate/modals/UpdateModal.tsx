'use client';

import { Modal } from 'flowbite-react';
import { ReactNode } from 'react';
import { useCrudContext } from '../../../hooks/useCrudContext';

export const EditModal= ({ children }: { children: ReactNode }) => {
  const { openEditModal, setOpenEditModal } = useCrudContext();
  return (
    <>
      <Modal show={openEditModal} size="7xl" onClose={() => setOpenEditModal(false)} popup>
        <Modal.Header/>
        <Modal.Body>
            {children}
        </Modal.Body>
      </Modal>
    </>
  );
}