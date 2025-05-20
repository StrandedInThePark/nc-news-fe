import { getArticleByArticleId } from "../api";
import { useEffect, useState } from "react";

import { Link } from "react-router";
import { ViewCommentsButton } from "./ViewCommentsButton";

export const ArticleCard = ({ article, idParam }) => {
  const [body, setBody] = useState("");

  useEffect(() => {
    getArticleByArticleId(article.article_id).then((article) => {
      setBody(article.body);
    });
  }, []);

  return (
    <>
      <li key={article.article_id}>
        <p className="article-list-title">{article.title}</p>

        <p className="article-list-author">Posted by {article.author}</p>
        <img className="article-list-image" src={article.article_img_url}></img>
        <p className="article-list-body-preview">
          {idParam ? body : body.substring(0, 200) + "..."}
        </p>
        <p className="article-list-comments">
          Comments: {article.comment_count}
        </p>
        <p className="article-list-votes"> Votes: {article.votes}</p>
        <Link className="article-card-link" to={"/" + article.article_id}>
          Full article
        </Link>
        <ViewCommentsButton
          id="commentsButton"
          article_id={article.article_id}
        />
      </li>
    </>
  );
};
