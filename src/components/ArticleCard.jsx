import { getArticleByArticleId } from "../api";
import { useEffect, useState } from "react";

import { Link } from "react-router";
import { ViewCommentsButton } from "./ViewCommentsButton";
import { ArticleVotes } from "./ArticleVotes";

export const ArticleCard = ({ article, idParam }) => {
  const [body, setBody] = useState("");

  useEffect(() => {
    getArticleByArticleId(article.article_id).then((article) => {
      setBody(article.body);
    });
  }, []);

  return (
    <>
      <li className="articleListItem" key={article.article_id}>
        <p className="article-list-title">{article.title}</p>

        <p className="article-list-author">Posted by {article.author}</p>
        <img className="article-list-image" src={article.article_img_url}></img>
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
