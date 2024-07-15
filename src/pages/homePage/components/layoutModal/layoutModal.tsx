import React, { useState } from 'react';
import ReactModal from 'react-modal';

const LayoutModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => { setIsOpen(false) }
  return (
    <ReactModal onRequestClose={handleClose} isOpen={isOpen}>
      <div>test</div>
    </ReactModal>
  );
}

export default LayoutModal;