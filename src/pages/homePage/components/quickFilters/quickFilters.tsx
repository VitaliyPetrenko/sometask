import React from 'react';
import cn from 'classnames';

import styles from './quickFilters.module.css';

type QuickFilterProps = {
  filters: string[];
  activeFilter: string;
  className?: string;
  onFilterClick: (type: string) => void;
}

const QuickFilters = ({ filters, activeFilter, className, onFilterClick }: QuickFilterProps) => {
  const handleFilterClick = (type: string) => {
    return () => {
      onFilterClick(type);
    }
  }

  return (
    <div className={cn(styles.container, className)}>
      {filters.map((filter) => (
        <div
          key={filter}
          role="button"
          tabIndex={0}
          className={cn(styles.filter, {
            [styles.activeFilter]: filter === activeFilter
          })}
          onClick={handleFilterClick(filter)}
        >
          {filter}
        </div>
      ))}
    </div>
  )
}

export default QuickFilters;