import times from 'lodash/times';
import { ASSET_TYPES } from './constants';

const LENGTH_BY_TYPE_MAPPER = {
  [ASSET_TYPES.FEATURED]: 4,
  [ASSET_TYPES.KPI]: 2,
  [ASSET_TYPES.STORYBOARD]: 6,
  [ASSET_TYPES.LAYOUT]: 3
};

export const useData = ({ type }: { type: string }) => {
  const items = times(LENGTH_BY_TYPE_MAPPER[type], (index) => {
    return {
      title: `${type} ${index}`,
      description: 'Short description of the item goes nicely here.',
      link: 'https://testlink.com',
      longDescription:
        'Long description of the item goes nicely here. Long description of the item goes nicely here.',
      id: `${index}`,
      image: './logo',
      tags: ['#first', '#second', '#third'],
      type,
      data: {
        usedTimes: 2456,
        pages: 6,
        lastUpdate: '03/07/2024',
        type: 'Universal'
      },
      businessQuestions: []
    };
  });

  const data: any = {
    title: type,
    description: 'Short description of the item goes nicely here.',
    items
  };

  data.trendingItems = type === ASSET_TYPES.FEATURED ? items : [];

  return data;
};
