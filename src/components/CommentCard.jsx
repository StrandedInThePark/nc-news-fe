import { useState, useEffect } from "react";

export const CommentCard = ({ comment }) => {
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <li className="commentCard">
      <p className="commentcard-header">
        {comment.author} on {comment.created_at.substring(0, 10)}
      </p>
      <p className="commentcard-votes">Votes: {comment.votes}</p>
      <button className="commentcard-delbutton">Delete comment</button>
      <p className="commentcard-body">{comment.body}</p>
    </li>
  );
};
