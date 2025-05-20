import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="navlinks">
        Articles
      </Link>
      <Link to="/user" className="navlinks">
        User
      </Link>
    </nav>
  );
};
