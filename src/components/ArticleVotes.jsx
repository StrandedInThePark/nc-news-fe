import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ArticleVotesButton } from "./ArticleVotesButton";

export const ArticleVotes = ({ initialVotes }) => {
  const { article_id } = useParams();
  const [isParam, setIsParam] = useState(false);
  const [totalVotes, setTotalVotes] = useState(0);
  const [newVotes, setNewVotes] = useState(0);

  useEffect(() => {
    if (article_id) {
      setIsParam(true);
    } else setIsParam(false);
  }, []);

  useEffect(() => {
    setTotalVotes(initialVotes + newVotes);
  }, [newVotes]);
  return (
    <>
      <p className="article-list-votes">
        Votes: {totalVotes}
        {isParam ? (
          <ArticleVotesButton
            newVotes={newVotes}
            setNewVotes={setNewVotes}
            article_id={article_id}
          />
        ) : null}
      </p>
    </>
  );
};
