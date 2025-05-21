import { useContext } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";
import { useState, useEffect } from "react";

export const CommentCard = ({ comment }) => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const [isCommentAuthorUser, setIsCommentAuthorUser] = useState(false);

  useEffect(() => {
    if (loggedInUser.username === comment.author) {
      setIsCommentAuthorUser(true);
    } else {
      setIsCommentAuthorUser(false);
    }
  }, [loggedInUser]);

  console.log(
    loggedInUser.username,
    "logged in user",
    comment.author,
    "author log"
  );
  return (
    <li className="commentCard">
      <p className="commentcard-header">
        {comment.author} on {comment.created_at.substring(0, 10)}
      </p>
      <p className="commentcard-votes">Votes: {comment.votes}</p>
      {isCommentAuthorUser ? (
        <button className="commentcard-delbutton">Delete your comment</button>
      ) : null}

      <p className="commentcard-body">{comment.body}</p>
    </li>
  );
};
