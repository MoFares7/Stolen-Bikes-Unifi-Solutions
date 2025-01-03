import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

const usePaginationSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      let newValue = "";
      if (value.startsWith("+")) {
        newValue = value.replace("+", "2B");
      }
      setSearchTerm(newValue || value);
      setPageNumber(1);
    }, 500);

    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageNumber(value);
  };

  const handlePageSizeChange = (event: SelectChangeEvent<string | number>) => {
    setPageSize(Number(event.target.value));
  };

  return {
    pageNumber,
    pageSize,
    searchTerm,
    handlePageChange,
    handlePageSizeChange,
    handleSearch,
  };
};

export default usePaginationSearch;
