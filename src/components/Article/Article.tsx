
import "./Article.css";

import DOMPurify from 'dompurify';

import { v4 as uuidv4 } from 'uuid';
import Image from './image';

interface ArticleProps {
  title: string,
  category: string,
  date: string,
  text: string,
  images?: string[],
}

function Article({title, category, date, text, images}: ArticleProps) {
  const titlePurify = () => DOMPurify.sanitize(title);
  const textPurify = () => DOMPurify.sanitize(text);

  return (
    <article data-testid="article" className="articles__article">
      <h3>{titlePurify()}</h3>
      <span>{category}</span>
      <span>{date}</span>
      <p className="articles__article__content">{textPurify()}</p>
      {images && images.length > 0 && <div className="articles__article__image">
        {images.map((image, index) => <Image key={uuidv4()} index={index} url={image} articleTitle={title} />)}
        </div>}
    </article>
  );
}

export default Article;
