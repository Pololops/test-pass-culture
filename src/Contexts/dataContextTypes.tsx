import { ChangeEventHandler } from 'react';

export interface New {
  title: string,
  category: string,
  date: string,
  text: string,
  images: string[],
}
export interface News extends Array<New>{}

export interface DataContextProps {
  children: JSX.Element
}

export interface LoadContextType {
  articles?: News,
  filteredArticles?: News,
  categories?: string[],
  dates?: string[],
  catFilterValue?: string,
  dateFilterValue?: string,
  categorySelectHandler?: ChangeEventHandler<HTMLSelectElement>, 
  dateSelectHandler?: ChangeEventHandler<HTMLSelectElement>,
  getAllData?: Function,
  getFilteredData?: Function,
  getFilters?: Function,
}
