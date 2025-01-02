import { useNavigate } from "react-router-dom";

export interface Row {
  id: string;
  [key: string]: any;
}

function useTableLogic<T extends Row>(rows: T[]) {
  // const navigate = useNavigate();

  const handleRowClick = (id: string) => {
    // navigate(`details/${id}`);
  };

  return {
    handleRowClick,
  };
}
export default useTableLogic;
