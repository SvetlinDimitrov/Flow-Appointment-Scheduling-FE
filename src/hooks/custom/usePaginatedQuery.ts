import { useState } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import Page from '../../shared/models/api/shared/Page';

const usePaginatedQuery = <T>(
  queryHook: (page: number, size: number, ...args: any[]) => UseQueryResult<Page<T>>,
  initialPage: number = 0,
  size: number = 10,
  ...args: any[]
) => {
  const [page, setPage] = useState(initialPage);

  const { data, isLoading, error } = queryHook(page, size, ...args);

  const handleNextPage = () => {
    if (data && page < data.totalPages - 1) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  return {
    data,
    isLoading,
    error,
    page,
    totalPages: data?.totalPages,
    handleNextPage,
    handlePreviousPage,
  };
};

export default usePaginatedQuery;