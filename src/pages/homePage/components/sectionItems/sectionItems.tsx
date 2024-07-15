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
}

const Item = ({ title, description, date, background }: ItemType & { background?: boolean }) => {
  return (
    <div className={cn(styles.item, {
      [styles.itemBackground]: background
    })}>
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

const SectionItems = ({ items, title, description, className, itemBackground }: SectionItemProps) => {
  return (
    <div className={cn(styles.section, className)}>
      {title && <div className={styles.title}>{title}</div>}
      {description && <div className={styles.description}>{description}</div>}
      <div className={styles.items}>
        {
          items.map((item) => {
            return <Item key={item.id} background={itemBackground} { ...item } />
          })
        }
      </div>
    </div>
  );
}

SectionItems.defaultProps = {
  itemBackground: true
}

export default SectionItems;