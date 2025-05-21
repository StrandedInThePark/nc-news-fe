import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="navlinks">
        Articles
      </Link>
      <Link to="/User" className="navlinks">
        User Account
      </Link>
    </nav>
  );
};
