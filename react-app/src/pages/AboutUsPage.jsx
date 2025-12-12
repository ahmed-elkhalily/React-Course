import { NavLink } from "react-router";

export default function AboutUsPage() {
  return (
    <div>
      <h2>About Us Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        temporibus placeat voluptate cum nihil? Quo eveniet ea, maiores,
        deleniti quis vel, voluptatem ipsa hic voluptatibus vero velit.
        Consectetur, quia magni.
      </p>
      <div>
        this is our articles
        <ul>
          <li>
            <NavLink to="/blog/1">Article No 1</NavLink>
          </li>
          <li>
            <NavLink to="/blog/2">Article No 2</NavLink>
          </li>
          <li>
            <NavLink to="/blog/3">Article No 3</NavLink>
          </li>
        </ul>
      </div>
      <NavLink to="/">go back Home Page</NavLink>
    </div>
  );
}
