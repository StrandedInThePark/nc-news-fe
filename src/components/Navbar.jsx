import { Link } from "react-router";
import { useContext } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";

export const Navbar = () => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  return (
    <nav>
      <Link to="/" className="navlinks">
        <button>Articles</button>
      </Link>
      <Link to="/User" className="navlinks">
        <button>User Account</button>
      </Link>
      {loggedInUser ? (
        <p className="loggedInNavMessage">
          Logged in as {loggedInUser.username}
        </p>
      ) : null}
    </nav>
  );
};
