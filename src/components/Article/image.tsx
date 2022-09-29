import React from 'react';
import "./Article.css";

interface ImageProps {
  index: number,
  url: string,
  articleTitle: string,
}

function Image({index, url, articleTitle}: ImageProps) {
  const imageURLResolver = () => {
    return url;
  }

  return (

    <img src={url} alt={`Illustration n°${index} de l'article intitulé : ${articleTitle}`} />
  );
}

export default Image;