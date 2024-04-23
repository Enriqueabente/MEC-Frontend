'use client';

import { Modal } from 'flowbite-react';
import { ReactNode } from 'react';
import { useCrudContext } from '../../../hooks/useCrudContext';

export const FilterModal= ({ children }: { children: ReactNode }) => {
  const { openSearchModal, setOpenSearchModal } = useCrudContext();
  return (
    <>
      <Modal show={openSearchModal} size="7xl" onClose={() => setOpenSearchModal(false)} popup>
        <Modal.Header/>
        <Modal.Body>
            {children}
        </Modal.Body>
      </Modal>
    </>
  );
}