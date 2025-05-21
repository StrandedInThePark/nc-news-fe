import { useContext } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";

export const User = () => {
  const { loggedInUser } = useContext(LoggedInUserContext);

  return (
    <>
      <h2>Welcome {loggedInUser.name}!</h2>
      <img className="profilePhoto" src={loggedInUser.avatar_url}></img>
      <h3>Profile details:</h3>
      <p>Username: {loggedInUser.username}</p>
    </>
  );
};
