import { ArticleList } from "./ArticleList";
import { getArticles } from "../api";
import { useState, useEffect } from "react";
import loading from "../assets/images/newspaperloading.gif";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((result) => {
        setArticles(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
