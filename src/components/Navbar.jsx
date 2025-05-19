import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Articles</Link>
      <Link to="/user">User</Link>
    </nav>
  );
};
