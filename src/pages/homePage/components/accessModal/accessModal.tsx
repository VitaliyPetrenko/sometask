import React from 'react';
import ReactModal from 'react-modal';
import { Close, CopyLink, RequestQuote } from '@carbon/icons-react';

import Button from '../../../../components/button/button';

import styles from './accessModal.module.css';

type AccessModalProps = {
  onRequestClose: () => void;
  isOpen: boolean;
};

const AccessModal = ({ onRequestClose, isOpen }: AccessModalProps) => {
  return (
    <ReactModal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.container}>
        <div className={styles.actions}>
          <Button icon={Close} variant="outlined" onClick={onRequestClose} />
        </div>
        <div>Storyboard modal</div>
        <textarea placeholder="Reason" />
        <Button icon={RequestQuote}>Request</Button>
      </div>
    </ReactModal>
  );
};

export default AccessModal;
