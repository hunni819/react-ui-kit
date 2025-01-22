import { useMemo } from 'react';

interface usePagingProps {
  currentPage: number;
  totalPageNum?: number;
  blockSize?: number;
  pages?: number[];
}

const usePaging = (
  currentPage = 0,
  totalPageNum = 0,
  blockSize = 10
): usePagingProps => {
  const filteredCurrentPage = Math.max(currentPage, 1);

  const startPage = useMemo(
    () => Math.floor((filteredCurrentPage - 1) / blockSize) * blockSize,
    [filteredCurrentPage, blockSize]
  );

  const endPage = useMemo(() => {
    return Math.min(startPage + blockSize - 1, totalPageNum - 1);
  }, [filteredCurrentPage, blockSize, totalPageNum]);

  const blockLength = useMemo(
    () => endPage - startPage + 1,
    [endPage, startPage]
  );

  const pages = useMemo(
    () => Array.from({ length: blockLength }, (_, index) => startPage + index),
    [blockLength, startPage]
  );

  return { currentPage, pages };
};

export default usePaging;
