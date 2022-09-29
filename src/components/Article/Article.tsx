import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Article.css";

interface ArticleProps {
  title: string,
  category: string,
  date: string,
  text: string,
  images?: string[],
}

function Article({title, category, date, text, images}: ArticleProps) {
  return (
    <article className="articles__article">
      <h3>{title}</h3>
      <span>{category}</span>
      <span>{date}</span>
      <div>{text}</div>
      {images && images.length > 0 && <div className="articles__article__image">
        {images.map((image, index) => <img src={`/src/assets${image}`} alt={`l'image n°${index} de l'article : ${title}`} />)}
        </div>}
    </article>
  );
}

// images.map((image, index) => <img src={image} alt="`l'image n°${index} de l'article : ${title}`" />)
// <img src={image} alt={`l'image n°${index} de l'article : ${title}`} />
export default Article;