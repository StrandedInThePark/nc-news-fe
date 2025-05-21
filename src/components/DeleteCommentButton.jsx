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
    console.log(isErrorDeleting, "log 1");
    deleteComment(commentId)
      .then(() => {
        setWasCommentDeleted(true);
        setIsErrorDeleting(false);
        console.log(isErrorDeleting, "log 2");
      })
      .then(() => {
        setIsErrorDeleting(false);
        console.log(isErrorDeleting, "log 3");
        getCommentsByArticleId(articleId)
          .then((comments) => {
            setIsErrorDeleting(false);
            setComments(comments);
            console.log(isErrorDeleting, "log 4");
          })
          .catch((err) => {
            setIsErrorDeleting(false);
            console.log(isErrorDeleting, "log 5");
          });
      })
      .catch((err) => {
        setWasCommentDeleted(false);
        console.log(err);
        setIsErrorDeleting(true);
        console.log(isErrorDeleting, "log 6");
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
