import { Link } from "react-router";
import { useContext } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";

export const Navbar = () => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  return (
    <nav>
      <Link to="/" className="navlinks">
        Articles
      </Link>
      <Link to="/User" className="navlinks">
        User Account
      </Link>
      {loggedInUser ? (
        <p className="loggedInNavMessage">
          Logged in as {loggedInUser.username}
        </p>
      ) : null}
    </nav>
  );
};
