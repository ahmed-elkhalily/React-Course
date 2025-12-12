import { NavLink, useParams } from "react-router";
import { ARTICLES } from "../consts/blogs";

export function Article() {
  const { id } = useParams();
  const article = ARTICLES[id];

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <a href={article.readMoreLink}>Read More</a>
      <hr />
      <NavLink to="/">Back to Home</NavLink>
    </div>
  );
}
