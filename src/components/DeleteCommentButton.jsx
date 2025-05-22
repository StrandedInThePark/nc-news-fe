import { deleteComment } from "../api";
import { useState } from "react";
import { getCommentsByArticleId } from "../api";

export const DeleteCommentButton = ({ commentId, setComments, articleId }) => {
  const [deleteTried, setDeleteTried] = useState(false);
  const [wasCommentDeleted, setWasCommentDeleted] = useState(false);
  const [isErrorDeleting, setIsErrorDeleting] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setDeleteTried(true);
    deleteComment(commentId)
      .then(() => {
        setWasCommentDeleted(true);
        setIsErrorDeleting(false);
      })
      .then(() => {
        setIsErrorDeleting(false);
        getCommentsByArticleId(articleId)
          .then((comments) => {
            setIsErrorDeleting(false);
            setComments(comments);
          })
          .catch((err) => {
            setIsErrorDeleting(false);
          });
      })
      .catch((err) => {
        setWasCommentDeleted(false);
        setIsErrorDeleting(true);
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
        ) : isErrorDeleting ? (
          <p>Sorry, there was a problem deleting your comment</p>
        ) : null
      ) : null}
    </>
  );
};
