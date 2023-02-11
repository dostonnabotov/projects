import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>404 - Not Found</h1>
      <p>
        Go back to <NavLink to="/">Homepage</NavLink>
      </p>
    </>
  );
}
