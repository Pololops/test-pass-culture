import React from 'react';
import "./Article.css";

interface ImageProps {
  index: number,
  url: string,
  articleTitle: string,
}

function Image({index, url, articleTitle}: ImageProps) {
  return (
    <img className="articles__article__image" src={url} alt={`Illustration n°${index} de l'article intitulé : ${articleTitle}`} />
  );
}

export default Image;