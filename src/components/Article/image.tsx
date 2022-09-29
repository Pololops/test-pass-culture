import React from 'react';
import "./Article.css";

interface ImageProps {
  index: number,
  url: string,
  articleTitle: string,
}

function Image({index, url, articleTitle}: ImageProps) {
  const imageURLResolver = () => {
    return 'http://localhost:3000/src/assets' + url;
  }

  return (

    <img src={url} alt={`Illustration n°${imageURLResolver()} de l'article intitulé : ${articleTitle}`} />
  );
}

export default Image;