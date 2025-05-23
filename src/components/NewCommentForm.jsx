import { useState, useEffect } from "react";
import { postComment } from "../api";
import { useContext } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";

export const NewCommentForm = ({ articleId }) => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const [username, setUsername] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [missingInfo, setMissingInfo] = useState();
  const [commentToPost, setCommentToPost] = useState({});
  const [commentIsPosted, setCommentIsPosted] = useState(false);
  const [errorPostingComment, setErrorPostingComment] = useState(false);
  const [renderComment, setRenderComment] = useState({});
  const [awaitingPost, setAwaitingPost] = useState(false);

  useEffect(() => {
    setUsername(loggedInUser.username);
  }, []);

  useEffect(() => {
    setCommentToPost({
      username: username,
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
          setErrorPostingComment(false);
          setAwaitingPost(false);
          setCommentIsPosted(true);
          setRenderComment(comment);
        })
        .catch((err) => {
          setAwaitingPost(false);
          setErrorPostingComment(true);
        });
    }
  }
  //add default filled out box to be logged in username
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
            We're sorry, there was a problem posting your comment. Make sure you
            are logged in as your Username!
          </p>
        ) : null}
      </form>
    </>
  );
};
