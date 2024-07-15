import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Grid, Favorite, Close, CopyLink } from '@carbon/icons-react';

import { ItemType } from '../../../../models/home';
import Button from '../../../../components/button/button';

import styles from './assetModal.module.css';

type AssetModalProps = {
  onRequestClose: () => void;
  isOpen: boolean;
  currentItem: ItemType;
};

const AssetModal = ({ onRequestClose, isOpen, currentItem }: AssetModalProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = () => {
    navigator.clipboard.writeText(currentItem.link).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <ReactModal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.container}>
        <div className={styles.actions}>
          {isCopied && <div className={styles.copied}>Copied to the clipboard!</div>}
          <Button icon={CopyLink} variant="outlined" onClick={handleCopyClick} />
          <Button icon={Close} variant="outlined" onClick={onRequestClose} />
        </div>
        <div className={styles.icon}>
          <Grid size={32} />
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{currentItem.title}</div>
          <div className={styles.assetType}>{currentItem.type}</div>
        </div>
        <div className={styles.shortDescription}>{currentItem.description}</div>
        <div className={styles.longDescription}>{currentItem.longDescription}</div>
        <div className={styles.tags}>
          {currentItem.tags.map((tag) => {
            return <div className={styles.tag}>{tag}</div>;
          })}
        </div>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <div className={styles.infoItemValue}>{currentItem.data.usedTimes}</div>
            <div className={styles.infoItemKey}>Used</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoItemValue}>{currentItem.data.type}</div>
            <div className={styles.infoItemKey}>Type</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoItemValue}>{currentItem.data.pages}</div>
            <div className={styles.infoItemKey}>Pages №</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoItemValue}>{currentItem.data.lastUpdate}</div>
            <div className={styles.infoItemKey}>Last Updated</div>
          </div>
        </div>
        <div className={styles.chart}></div>
        <Button icon={Favorite} className={styles.favorite}>
          Favorite Item
        </Button>
      </div>
    </ReactModal>
  );
};

export default AssetModal;
