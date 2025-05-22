import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-api-host.onrender.com/api/",
});

export const getArticles = (topicQuery) => {
  return newsApi
    .get("/articles", { params: { topic: topicQuery } })
    .then(({ data }) => {
      return data.articles;
    });
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

export const getUser = (username) => {
  return newsApi.get(`/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const deleteComment = (commentId) => {
  return newsApi.delete(`/comments/${commentId}`).then(() => {});
};

export const getTopics = () => {
  return newsApi.get("topics").then(({ data }) => {
    return data.topics;
  });
};
