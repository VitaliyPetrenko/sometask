import React from 'react';
import { Time } from '@carbon/icons-react';
import cn from 'classnames';

import { ItemType } from '../../../../models/home';

import styles from './sectionItems.module.css';

type SectionItemProps = {
  items: ItemType[];
  title?: string;
  description?: string;
  className?: string;
  itemBackground?: boolean;
  handleItemClick: (item: ItemType) => void
}

const Item = ({ title, description, date, background, onClick }: ItemType & { background?: boolean, onClick: () => void }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={cn(styles.item, {
        [styles.itemBackground]: background
      })}
    >
      <div>
        <div className={styles.itemImage}>
          <Time size={32} />
        </div>
      </div>
      <div>
        <div className={styles.itemTitle}>{title}</div>
        <div>{description}</div>
        {date && <div className={styles.itemDate}>{date}</div>}
      </div>
    </div>
  )
}

const SectionItems = ({ handleItemClick, items, title, description, className, itemBackground = true }: SectionItemProps) => {
  return (
    <div className={cn(styles.section, className)}>
      {title && <div className={styles.title}>{title}</div>}
      {description && <div className={styles.description}>{description}</div>}
      {
        Boolean(items.length) && (
          <div className={styles.items}>
            {
              items.map((item) => {
                const onClick = () => {
                  return () => {
                    handleItemClick(item);
                  }
                }

                return <Item onClick={onClick()} key={item.id} background={itemBackground} {...item} />
              })
            }
          </div>
        )
      }
      {
        !items.length && (
          <div className={styles.items}>
            Try to use another filter
          </div>
        )
      }
    </div>
  );
}

export default SectionItems;