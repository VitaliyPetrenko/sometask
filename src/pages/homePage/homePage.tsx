import React, {ChangeEvent, useState} from 'react';
import { RequestQuote } from '@carbon/icons-react';

import SectionItems from './components/sectionItems/sectionItems';
import SearchInput from './components/search/searchInput';
import AssetModal from './components/assetModal/assetModal';
import {ASSET_TYPES} from './constants';
import { useData } from './utility';
import QuickFilters from './components/quickFilters/quickFilters';
import {ItemType} from '../../models/home';
import Button from '../../components/button/button';

import styles from './homePage.module.css';
import AccessModal from './components/accessModal/accessModal';

const filters = Object.values(ASSET_TYPES);

const HomePage = () => {
  const [currentType, setCurrentType] = useState(ASSET_TYPES.FEATURED);
  const [search, setCurrentSearch] = useState('');
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<ItemType | null>(null);
  const data = useData({ type: currentType });

  const handleFilterClick = (type: string) => {
    setCurrentType(type);
    setCurrentSearch('');
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value);
  }

  const handleItemClick = (item: ItemType) => {
    setCurrentItem(item)
  }

  const handleRequestClose = () => {
    setCurrentItem(null);
  }

  const handleRequestAccessModalClose = () => {
    setIsRequestModalOpen(false);
  }

  const handleRequestAccessModalOpen = () => {
    setIsRequestModalOpen(true);
  }

  const filteredItems = data.items.filter((item: ItemType) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className={styles.container}>
      <Button icon={RequestQuote} className={styles.button} onClick={handleRequestAccessModalOpen}>Request</Button>
      <div className={styles.title}>Library</div>
      <div className={styles.description}>Browse for assets needed to report and present analysis.</div>
      <SearchInput onChange={handleSearchChange} value={search} />
      <QuickFilters
        className={styles.quickFilters}
        filters={filters}
        activeFilter={currentType}
        onFilterClick={handleFilterClick}
      />
      <SectionItems
        handleItemClick={handleItemClick}
        className={styles.section}
        items={filteredItems}
        title={data.title}
        description={data.description}
      />
      {
        Boolean(data.trendingItems.length) && (
          <SectionItems
            handleItemClick={handleItemClick}
            className={styles.section}
            itemBackground={false}
            items={data.trendingItems}
            title="Trending"
            description="Most popular by comunity"
          />
        )
      }
      {
        Boolean(currentItem) && currentItem && <AssetModal isOpen onRequestClose={handleRequestClose} currentItem={currentItem} />
      }
      {
        isRequestModalOpen && <AccessModal isOpen={isRequestModalOpen} onRequestClose={handleRequestAccessModalClose} />
      }
    </div>
  );
}

export default HomePage;