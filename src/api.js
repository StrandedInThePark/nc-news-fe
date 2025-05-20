import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-api-host.onrender.com/api/",
});

export const getArticles = () => {
  return newsApi.get("/articles").then(({ data }) => data.articles);
};

export const getArticleByArticleId = (articleId) => {
  return newsApi.get(`/articles/${articleId}`).then(({ data }) => data.article);
};
