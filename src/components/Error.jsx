export const Error = ({ status, msg }) => {
  if (status && msg) {
    return (
      <div className="pageError">
        <h3>
          {status} {msg}
        </h3>
        <h2>Sorry, it looks like this page does not exist!</h2>
      </div>
    );
  } else
    return (
      <div>
        <h2>Sorry, it looks like this page does not exist!</h2>
      </div>
    );
};
