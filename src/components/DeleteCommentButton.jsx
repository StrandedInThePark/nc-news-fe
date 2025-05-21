import { deleteComment } from "../api";
import { useState } from "react";
import { getCommentsByArticleId } from "../api";

export const DeleteCommentButton = ({ commentId, setComments, articleId }) => {
  const [deleteTried, setDeleteTried] = useState(false);
  const [wasCommentDeleted, setWasCommentDeleted] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setDeleteTried(true);
    deleteComment(commentId)
      .then(() => {
        setWasCommentDeleted(true);
      })
      .then(() => {
        getCommentsByArticleId(articleId).then((comments) => {
          setComments(comments);
        });
      })
      .catch((err) => {
        console.log(err);
        setWasCommentDeleted(false);
      });
  }

  return (
    <>
      <button onClick={handleClick} className="commentcard-delbutton">
        Delete your comment
      </button>

      {deleteTried ? (
        wasCommentDeleted ? (
          <p>Comment gone!</p>
        ) : (
          <p>Sorry, there was a problem deleting your comment</p>
        )
      ) : null}
    </>
  );
};
