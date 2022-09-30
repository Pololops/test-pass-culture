import { createContext, useState } from 'react';
import { News, LoadContextType, DataContextProps } from './dataContextTypes'

import data from '../assets/data/news.json';

export const DataContext = createContext<LoadContextType>({});

const DataContextprovider = ({children}: DataContextProps) => {
  const [articles, setArticles] = useState([] as News);
  const [filteredArticles, setFilteredArticles] = useState([] as News);
  const [categories, setCategories] = useState([] as string[]);
  const [dates, setDates] = useState([] as string[]);
  const [catFilterValue, setCatFilterValue] = useState('' as string);
  const [dateFilterValue, setDateFilterValue] = useState('' as string);

  const categorySelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCatFilterValue(event.target.value)
  }

  const dateSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDateFilterValue(event.target.value)
  }

  const getAllData = () => {
    const news = data.news as unknown as News;
    setArticles(news) as unknown as News;
  }

  const getFilteredData = () => {
    if (catFilterValue === '' && dateFilterValue === '') {
      return setFilteredArticles(articles);
    }

    const filteredData = articles.filter(({category, date}) => {
      if (dateFilterValue === '') return category === catFilterValue;
      if (catFilterValue === '') return date === dateFilterValue;
      return category === catFilterValue && date === dateFilterValue;
    });

      return setFilteredArticles(filteredData);
  }

  const getFilters = () => {
    const categoriesList = Array.from(new Set<string>([...data.news.map(({category}) => category)]));
    const datesList = Array.from(new Set<string>([...data.news.map(({date}) => date)]));
    
    setCategories(categoriesList);
    setDates(datesList);
    setFilteredArticles(articles);
  }

  return (
		<DataContext.Provider
			value={{
        articles,
				filteredArticles,
				categories,
				dates,
				catFilterValue,
				dateFilterValue,
        categorySelectHandler, 
        dateSelectHandler,
        getAllData,
        getFilteredData,
        getFilters
			}}
		>
			{children}
		</DataContext.Provider>
	);
}

export default DataContextprovider