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

export const getCommentsByArticleId = (articleId) => {
  return newsApi
    .get(`/articles/${articleId}/comments`)
    .then(({ data }) => data.comments);
};

export const patchArticleUpvote = (articleId) => {
  return newsApi
    .patch(`articles/${articleId}`, { inc_votes: 1 })
    .then(() => {});
};

export const patchArticleDownvote = (articleId) => {
  return newsApi
    .patch(`articles/${articleId}`, { inc_votes: -1 })
    .then(() => {});
};

export const postComment = ([commentToPost, articleId]) => {
  return newsApi
    .post(`articles/${articleId}/comments`, commentToPost)
    .then(({ data }) => {
      return data.newComment;
    });
};
