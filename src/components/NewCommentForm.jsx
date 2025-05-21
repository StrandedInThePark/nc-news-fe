import { useState, useEffect } from "react";
import { postComment } from "../api";

export const NewCommentForm = ({ articleId }) => {
  const [username, setUsername] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [missingInfo, setMissingInfo] = useState();
  const [commentToPost, setCommentToPost] = useState({});
  const [commentIsPosted, setCommentIsPosted] = useState(false);
  const [errorPostingComment, setErrorPostingComment] = useState(false);
  const [renderComment, setRenderComment] = useState({});
  const [awaitingPost, setAwaitingPost] = useState(false);

  useEffect(() => {
    setCommentToPost({
      username: username,
      //   article_id: articleId,
      body: commentBody,
    });
  }, [username, commentBody]);

  function handleAuthorChange(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }
  function handleCommentBodyChange(e) {
    e.preventDefault();
    setCommentBody(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username === "" || commentBody === "") {
      setMissingInfo(true);
    } else {
      setMissingInfo(false);
      setAwaitingPost(true);
      postComment([commentToPost, articleId])
        .then((comment) => {
          setAwaitingPost(false);
          setCommentIsPosted(true);
          setErrorPostingComment(false);
          setRenderComment(comment, "render log");
        })
        .catch((err) => {
          setAwaitingPost(false);
          console.log(err, "error log");
          setErrorPostingComment(true);
        });
    }
  }
  console.log(renderComment);
  return (
    <>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleAuthorChange}
          name="username"
          type="text"
          value={username}
        ></input>
        <label htmlFor="commentBody">Comment:</label>
        <textarea
          onChange={handleCommentBodyChange}
          name="commentBody"
          type="textArea"
          className="expandingTextBox"
          value={commentBody}
        ></textarea>
        {missingInfo ? (
          <p className="formErrorText">
            Make sure you have filled in all boxes!
          </p>
        ) : null}
        <input onClick={handleSubmit} type="Submit" readOnly="Post!"></input>
        {awaitingPost ? <p>Posting now...</p> : null}
        {commentIsPosted ? (
          <>
            <p>Thanks for contributing!</p>
            <p className="temporaryCommentAuthorRender">
              {renderComment.author} on{" "}
              {renderComment.created_at.substring(0, 10)}
            </p>
            <p className="temporaryCommentBodyRender">{renderComment.body}</p>
          </>
        ) : null}
        {errorPostingComment ? (
          <p className="formErrorText">
            We're sorry, there was a problem posting your comment. Check your
            author exists!
          </p>
        ) : null}
      </form>
    </>
  );
};
