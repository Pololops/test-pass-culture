import './PageArticles.css'

import Article from '../Article/Article';
import FilterForm from '../FilterForm/FilterForm';
import data from '../../assets/data/news.json';
import { useEffect, useState } from 'react';

interface New {
  title: string,
  category: string,
  date: string,
  text: string,
  images: string[],
}
interface News extends Array<New>{}

function PageArticles() {
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
    setCategories(data.news.map(({category}) => category));
    setDates(data.news.map(({date}) => date));
    setFilteredArticles(articles);
  }

  useEffect(() => {
    getFilters();
    getAllData();
  }, [articles]);

  useEffect(() => {
    getFilteredData();
  }, [catFilterValue, dateFilterValue]);

  return (
    <main className="main">
      <h2 className="main__title">Les Articles</h2>

      <FilterForm categories={categories} dates={dates} onCatSelectChange={categorySelectHandler} onDateSelectChange={dateSelectHandler} />

      <div className="articles">
        {(filteredArticles.length > 0) ? filteredArticles.map(({
          title, category, date, text, images
        }: New) => 
          <Article key={title} title={title} category={category} date={date} text={text} images={images} />) : 'Auncun article trouvé !'}
      </div>
    </main>
  );
}

export default PageArticles;