import Article from '../Article/Article'
import dataArticles from '../../data/news.json'

function PageArticles() {
  return (
    <main className="main">
      {dataArticles.news.map(({title, category, date, text, images}) => 
        <Article title={title} category={category} date={date} text={text} images={images} />)}
    </main>
  );
}

export default PageArticles;