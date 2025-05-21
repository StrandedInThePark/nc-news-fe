import { useState } from "react";
import { NewCommentForm } from "./NewCommentForm";

export const NewCommentButton = ({ articleId }) => {
  const [showForm, setShowForm] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setShowForm(true);
  }
  return (
    <>
      {!showForm ? <button onClick={handleClick}>New comment</button> : null}

      {showForm ? <NewCommentForm articleId={articleId} /> : null}
    </>
  );
};
