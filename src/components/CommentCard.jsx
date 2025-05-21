import { useContext } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";
import { useState, useEffect } from "react";
import { DeleteCommentButton } from "./DeleteCommentButton";

export const CommentCard = ({ comment, setComments, articleId }) => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const [isCommentAuthorUser, setIsCommentAuthorUser] = useState(false);

  useEffect(() => {
    if (loggedInUser.username === comment.author) {
      setIsCommentAuthorUser(true);
    } else {
      setIsCommentAuthorUser(false);
    }
  }, [loggedInUser]);

  return (
    <li className="commentCard">
      <p className="commentcard-header">
        {comment.author} on {comment.created_at.substring(0, 10)}
      </p>
      <p className="commentcard-votes">Votes: {comment.votes}</p>
      {isCommentAuthorUser ? (
        <DeleteCommentButton
          commentId={comment.comment_id}
          setComments={setComments}
          articleId={articleId}
        />
      ) : null}
      <p className="commentcard-body">{comment.body}</p>
    </li>
  );
};
