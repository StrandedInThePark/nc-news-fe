import { ArticleCard } from "./ArticleCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Filters } from "./Filters";
import { getArticleByArticleId } from "../api";
import { Error } from "./Error";

export const ArticleList = ({ articles }) => {
  const { article_id } = useParams();
  const [idParam, setIdParam] = useState(null);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (article_id) {
      getArticleByArticleId(article_id)
        .then(() => {})
        .catch((err) => {
          setError({
            status: err.response.status,
            msg: err.response.data.msg,
          });
          console.log(error);
        });
    }
  }, [article_id]);

  useEffect(() => {
    setIdParam(null);
    if (article_id) {
      setIdParam(true);
    } else {
      setIdParam(null);
    }
  }, [article_id]);

  useEffect(() => {
    if (article_id) {
      const copyArticles = articles.filter(
        (article) => Number(article.article_id) === Number(article_id)
      );
      setCurrentArticle(copyArticles);
    }
  }, [article_id]);

  return (
    <>
      {idParam ? (
        <ArticleCard article={currentArticle[0]} idParam={idParam} />
      ) : (
        <>
          <Filters />
          <ul className="articleList">
            {articles.map((article) => {
              return (
                <ArticleCard
                  key={article.article_id}
                  article={article}
                  idParam={idParam}
                />
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};
