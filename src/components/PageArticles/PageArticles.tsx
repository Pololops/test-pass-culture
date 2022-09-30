import './PageArticles.css'

import Article from '../Article/Article';
import FilterForm from '../FilterForm/FilterForm';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../Contexts/dataContext';
import { New, LoadContextType } from '../../Contexts/dataContextTypes'


function PageArticles() {
  const { 
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
  }: LoadContextType = useContext(DataContext);
  
  useEffect(() => {
    getFilters && getFilters();
    getAllData && getAllData();
  }, [articles]);

  useEffect(() => {
    getFilteredData && getFilteredData();
  }, [catFilterValue, dateFilterValue]);

  return (
    <>
      <h2 className="main__title">Les Articles</h2>

      {categories && 
        dates && 
        categorySelectHandler && 
        dateSelectHandler && 
        <FilterForm 
          categories={categories} 
          dates={dates} 
          onCatSelectChange={categorySelectHandler} 
          onDateSelectChange={dateSelectHandler} 
        />
      }

      <div className="articles">
        {(filteredArticles && filteredArticles.length > 0) ? filteredArticles.map(({
          title, category, date, text, images
        }: New) => 
          <Article key={title} title={title} category={category} date={date} text={text} images={images} />) : 'Auncun article trouvé !'}
      </div>
    </>
  );
}

export default PageArticles;