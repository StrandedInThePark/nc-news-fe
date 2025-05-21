export const User = ({ user }) => {
  //hard-coded while there is no login or createaccount feature
  //would use path with param based on account login to fetch username and display details for that account
  //using pre-existing account grumpy19

  return (
    <>
      <h2>Welcome {user.name}!</h2>
      <img className="profilePhoto" src={user.avatar_url}></img>
      <h3>Profile details:</h3>
      <p>Username: {user.username}</p>
    </>
  );
};

//name
//username
//photo
