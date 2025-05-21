export const CommentCard = ({ comment }) => {
  return (
    <li className="commentCard">
      <p className="commentcard-header">
        {comment.author} on {comment.created_at.substring(0, 10)} <br />
        Votes: {comment.votes}
      </p>
      <p className="commentcard-body">{comment.body}</p>
    </li>
  );
};
