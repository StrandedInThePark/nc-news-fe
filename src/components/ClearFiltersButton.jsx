import { Link } from "react-router";

export const ClearFiltersButton = () => {
  return (
    <Link className="clearFilterButton" to="/">
      <button>Clear</button>
    </Link>
  );
};
