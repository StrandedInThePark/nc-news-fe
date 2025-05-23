import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-api-host.onrender.com/api/",
});

export const getArticles = (topicQuery, sortQuery, orderQuery) => {
  return newsApi
    .get("/articles?limit=100", {
      params: { topic: topicQuery, sort_by: sortQuery, order: orderQuery },
    })
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

//combine upvote and downvote patch into one
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

export const getTopicBySlug = (topicSlug) => {
  return newsApi.get(`topics/${topicSlug}`).then(({ data }) => {});
};
