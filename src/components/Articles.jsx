import { ArticleList } from "./ArticleList";
import { useState } from "react";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  return (
    <>
      <h2>Articles placeholder</h2>
      <ArticleList />
    </>
  );
};
