export interface ItemType {
  title: string;
  description: string;
  image: string;
  date?: string;
  id: string;
  type: string;
  longDescription: string;
  link: string;
  tags: string[];
  data: {
    usedTimes: number;
    pages: number;
    lastUpdate: string;
    type: string;
  };
}
