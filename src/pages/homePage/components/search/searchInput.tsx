import React, { ChangeEvent } from 'react';
import { Search } from '@carbon/icons-react';

import styles from './search.module.css';

type SearchInputProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchInput = ({ onChange, value }: SearchInputProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}><Search /></span>
      <input value={value} onChange={onChange} className={styles.input} placeholder="Type to search" />
    </div>
  );
}

export default SearchInput;