import { useState } from "react";
import { patchArticleUpvote, patchArticleDownvote } from "../api";

export const ArticleVotesButton = ({ newVotes, setNewVotes, article_id }) => {
  const [isPatchError, setIsPatchError] = useState(false);

  function handleUpvoteClick(e) {
    e.preventDefault();
    if (newVotes < 1) {
      setNewVotes(newVotes + 1);
      patchArticleUpvote(article_id).catch(() => {
        setIsPatchError(true);
      });
    }
  }
  function handleDownvoteClick(e) {
    e.preventDefault();
    if (newVotes > -1) {
      setNewVotes(newVotes - 1);
      patchArticleDownvote(article_id).catch(() => {
        setIsPatchError(true);
      });
    }
  }
  return (
    <>
      <button onClick={handleUpvoteClick}>Upvote</button>
      <button onClick={handleDownvoteClick}>Downvote</button>
      {isPatchError ? <p>Sorry, something went wrong!</p> : null}
    </>
  );
};
