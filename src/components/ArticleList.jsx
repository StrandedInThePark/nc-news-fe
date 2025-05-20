import { ArticleCard } from "./ArticleCard";

export const ArticleList = ({ articles }) => {
  return (
    <>
      <ul>
        {articles.map((article) => {
          return <ArticleCard article={article} />;
        })}
      </ul>
    </>
  );
};
