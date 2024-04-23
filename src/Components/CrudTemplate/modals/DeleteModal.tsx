'use client';

import { Modal } from 'flowbite-react';
import { ReactNode } from 'react';
import { useCrudContext } from '../../../hooks/useCrudContext';

export const DeleteModal= ({ children }: { children: ReactNode }) => {
  const { openDeleteModal, setOpenDeleteModal } = useCrudContext();
  return (
    <>
      <Modal show={openDeleteModal} size="7xl" onClose={() => setOpenDeleteModal(false)} popup>
        <Modal.Header/>
        <Modal.Body>
            {children}
        </Modal.Body>
      </Modal>
    </>
  );
}