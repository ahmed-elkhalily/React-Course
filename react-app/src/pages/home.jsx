import { NavLink } from "react-router";
import { ARTICLES } from "../consts/blogs";

export function Home() {
  return (
    <>
      <h1>Elkhalily Blog Page</h1>
      <ul>
        {Object.keys(ARTICLES).map((key) => (
          <li key={key}>
            <NavLink to={`article/${key}`}>{ARTICLES[key].title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
