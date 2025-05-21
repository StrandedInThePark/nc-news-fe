import { ArticleList } from "./ArticleList";
import { getArticles } from "../api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import loading from "../assets/images/newspaperloading.gif";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");

  //Add a button to clear topicQuery, as an alternative to clicking articles to reset?

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicQuery)
      .then((result) => {
        setArticles(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topicQuery]);

  return (
    <>
      <h2>Articles</h2>

      {isLoading ? (
        <>
          <img src={loading} alt="newspaper loading" id="loadingGif"></img>
          <p id="loadingText">Loading...</p>
        </>
      ) : (
        <ArticleList articles={articles} />
      )}
    </>
  );
};
