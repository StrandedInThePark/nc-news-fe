import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import { CommentCard } from "./CommentCard";
import { NewCommentButton } from "./NewCommentButton";
export const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
    });
  }, []);

  return (
    <ul className="commentsUlList">
      <NewCommentButton articleId={article_id} />
      {comments.map((comment) => {
        return <CommentCard comment={comment} />;
      })}
    </ul>
  );
};
