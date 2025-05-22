import { ArticleList } from "./ArticleList";
import { getArticles } from "../api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import loading from "../assets/images/newspaperloading.gif";
import { getArticleByArticleId } from "../api";
import { Error } from "./Error";
import { useParams } from "react-router";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const sortQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");
  const { article_id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (article_id) {
      getArticleByArticleId(article_id)
        .then(() => {})
        .catch((err) => {
          setError({
            status: err.response?.status,
            msg: err.response?.data?.msg,
          });
        });
    }
  }, [article_id]);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicQuery, sortQuery, orderQuery)
      .then((result) => {
        setArticles(result);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, [topicQuery, sortQuery, orderQuery]);

  return (
    <>
      <div className="filterAndArticlesContainer">
        <h2>Articles</h2>
        {error ? (
          <Error />
        ) : isLoading ? (
          <>
            <img src={loading} alt="newspaper loading" id="loadingGif"></img>
            <p id="loadingText">Loading...</p>
          </>
        ) : (
          <ArticleList className="articleListColumnSet" articles={articles} />
        )}
      </div>
    </>
  );
};
