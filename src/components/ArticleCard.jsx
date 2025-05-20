import { getArticleByArticleId } from "../api";
import { useEffect, useState } from "react";

export const ArticleCard = ({ article }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [body, setBody] = useState("");
  useEffect(() => {
    setIsLoading(true);
    getArticleByArticleId(article.article_id).then((article) => {
      setIsLoading(false);
      setBody(article.body);
    });
  }, []);

  return isLoading ? (
    "Loading..."
  ) : (
    <>
      <li>
        <p className="article-list-title">{article.title} </p>
        <p className="article-list-author">Posted by {article.author}</p>
        <img className="article-list-image" src={article.article_img_url}></img>
        <p className="article-list-body-preview">{body.substring(0, 200)}...</p>
        <p className="article-list-comments">
          Comments: {article.comment_count}
        </p>
        <p className="article-list-votes"> Votes: {article.votes}</p>
      </li>
    </>
  );
};
