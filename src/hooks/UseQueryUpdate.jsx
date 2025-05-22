import { useNavigate, useLocation } from "react-router";

export const useQueryUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const updateQuery = (key, value) => {
    const params = new URLSearchParams(location.search);
    params.set(key, value);
    navigate({
      pathname: location.pathname,
      search: params.toString(),
    });
  };
  return updateQuery;
};
