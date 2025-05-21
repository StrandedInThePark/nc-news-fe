import { useState } from "react";
import { CommentsList } from "./CommentsList.jsx";

export const ViewCommentsButton = ({ article_id, commentCount }) => {
  const [showComments, setShowComments] = useState(false);
  const [buttonText, setButtonText] = useState(
    `Show comments (${commentCount})`
  );

  function handleClick(e) {
    e.preventDefault();
    if (showComments === true) {
      setButtonText(`Show comments (${commentCount})`);
      setShowComments(false);
    } else {
      setButtonText("Hide comments");
      setShowComments(true);
    }
  }

  return (
    <>
      <button className="commentsButton" onClick={handleClick}>
        {buttonText}
      </button>
      {showComments ? <CommentsList article_id={article_id} /> : null}
    </>
  );
};
