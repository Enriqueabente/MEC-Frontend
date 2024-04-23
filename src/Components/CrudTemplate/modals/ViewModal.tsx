'use client';

import { Modal } from 'flowbite-react';
import { ReactNode } from 'react';
import { useCrudContext } from '../../../hooks/useCrudContext';

export const ViewModal= ({ children }: { children: ReactNode }) => {
  const { openViewModal, setOpenViewModal } = useCrudContext();
  return (
    <>
      <Modal show={openViewModal} size="7xl" onClose={() => setOpenViewModal(false)} popup>
        <Modal.Header/>
        <Modal.Body>
            {children}
        </Modal.Body>
      </Modal>
    </>
  );
}