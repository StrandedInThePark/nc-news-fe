import { useQueryUpdate } from "../hooks/UseQueryUpdate";

export const Order = () => {
  const updateQuery = useQueryUpdate();

  return (
    <>
      <button
        onClick={() => updateQuery("order", "asc")}
        className="orderButton"
      >
        Ascending
      </button>
      <button
        onClick={() => updateQuery("order", "desc")}
        className="orderButton"
      >
        Descending
      </button>
    </>
  );
};
