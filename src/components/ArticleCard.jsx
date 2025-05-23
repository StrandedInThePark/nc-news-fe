import { getArticleByArticleId } from "../api";
import { useEffect, useState } from "react";

import { Link } from "react-router";
import { ViewCommentsButton } from "./ViewCommentsButton";
import { ArticleVotes } from "./ArticleVotes";

export const ArticleCard = ({ article, idParam }) => {
  const [body, setBody] = useState("");

  useEffect(() => {
    getArticleByArticleId(article.article_id)
      .then((article) => {
        setBody(article.body);
      })
      .catch((err) => {});
  }, [article.article_id]);

  return (
    <>
      <li className="articleListItem">
        <p className="article-list-title">{article.title}</p>
        <p className="article-list-author">
          Posted by {article.author} on {article.created_at.substring(0, 10)}
        </p>
        <Link to={"/" + article.article_id}>
          <img
            className="article-list-image"
            src={article.article_img_url}
            alt={article.title}
          ></img>
        </Link>
        <p className="article-list-body-preview">
          {idParam ? body : body.substring(0, 100) + "..."}
        </p>
        <Link className="article-card-link" to={"/" + article.article_id}>
          Full article
        </Link>
        <ArticleVotes initialVotes={article.votes} />
        <ViewCommentsButton
          id="commentsComponent"
          article_id={article.article_id}
          commentCount={article.comment_count}
        />
      </li>
    </>
  );
};
