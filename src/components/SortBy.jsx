import { useQueryUpdate } from "../hooks/UseQueryUpdate";

export const SortBy = () => {
  const updateQuery = useQueryUpdate();

  //   function onClick(e) {
  //     e.preventDefault();
  //   }

  return (
    <>
      <button
        onClick={() => updateQuery("sort_by", "created_at")}
        className="sortButton"
      >
        Date
      </button>
      <button
        onClick={() => updateQuery("sort_by", "comment_count")}
        className="sortButton"
      >
        Comments
      </button>

      <button
        onClick={() => updateQuery("sort_by", "votes")}
        className="sortButton"
      >
        Votes
      </button>
    </>
  );
};
