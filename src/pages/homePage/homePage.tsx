import React from 'react';

import SectionItems from './components/sectionItems/sectionItems';
import SearchInput from './components/search/searchInput';

import styles from './homePage.module.css';
import LayoutModal from "./components/layoutModal/layoutModal";

const data = {
  featuredItems: [
    {
      title: 'Item name',
      description: 'Short description of the item goes nicely here.',
      id: '1',
      image: './logo',
      date: '07/03/2024'
    },
    {
      title: 'Item name',
      description: 'Short description of the item goes nicely here.',
      id: '2',
      image: './logo'
    },
    {
      title: 'Item name',
      description: 'Short description of the item goes nicely here.',
      id: '3',
      image: './logo'
    },
    {
      title: 'Item name',
      description: 'Short description of the item goes nicely here.',
      id: '4',
      image: './logo'
    }
  ]
}

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Library</div>
      <div className={styles.description}>Browse for assets needed to report and present analysis.</div>
      <SearchInput />
      <SectionItems className={styles.section} items={data.featuredItems} title="Featured" description="Created top pics from this week" />
      <SectionItems className={styles.section} itemBackground={false} items={data.featuredItems} title="Trending" description="Most popular by comunity" />
      <LayoutModal />
    </div>
  );
}

export default HomePage;