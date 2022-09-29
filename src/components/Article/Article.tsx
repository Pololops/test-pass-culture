import "./Article.css";

interface ArticleProps {
  title: string,
  category: string,
  date: string,
  text: string,
  images: string[] | undefined,
}

function Article({title, category, date, text, images}: ArticleProps) {
  return (
    <div className="articles">
      <article className="articles__article">
        <h2>{title}</h2><span>{category}</span><span>{date}</span>
        <div>{text}</div>
      </article>
    </div>
  );
}

export default Article;