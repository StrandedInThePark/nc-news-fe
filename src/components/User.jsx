import { useContext } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";

export const User = () => {
  //hard-coded while there is no login or createaccount feature
  //would use path with param based on account login to fetch username and display details for that account
  //using pre-existing account grumpy19

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

//name
//username
//photo
