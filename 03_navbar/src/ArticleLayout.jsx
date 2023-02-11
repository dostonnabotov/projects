import { Link, Outlet } from "react-router-dom";

export default function ArticleLayout() {
  return (
    <>
      <Outlet context={{ hello: "World" }} />
      <ul>
        <li>
          <Link to="/blog/1">Article 1</Link>
        </li>
        <li>
          <Link to="/blog/2">Article 2</Link>
        </li>
        <li>
          <Link to="/blog/new">New Article</Link>
        </li>
      </ul>
    </>
  );
}
