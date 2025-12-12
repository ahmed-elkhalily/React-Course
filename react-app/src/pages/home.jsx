import { NavLink } from "react-router";
import { ARTICLES } from "../consts/blogs";

export function Home() {
  return (
    <>
      <h1>Elkhalily Blog Page</h1>
      <ul>
        {Object.keys(ARTICLES).map((key) => (
          <li key={key}>
            <img src={ARTICLES[key].image} alt={ARTICLES[key].title} />
            <h4>{ARTICLES[key].title}</h4>
            <p>{ARTICLES[key].body.slice(0, 75) + "..."}</p>
            <NavLink to={`article/${key}`}>Read More</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
