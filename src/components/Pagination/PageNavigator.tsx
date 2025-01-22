import { ReactNode, useMemo } from 'react';
import { usePageNationContext } from './';
import usePaging from './hooks/usePaging';
import {
  paginationNavigatorBaseCls,
  paginationNavigatorListCls,
} from '../../consts/className';

interface PageNavigatorProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

const PageNavigator = (props: PageNavigatorProps) => {
  const { className: classNameProps } = props;
  const { value, totalPageNum, onPageChange } = usePageNationContext();
  const { currentPage } = usePaging(value, totalPageNum);

  const handlePagePrev = (currentPage: number) => {
    if (currentPage <= 1) {
      return;
    }

    onPageChange(currentPage - 1);
  };
  const handlePageNext = (currentPage: number) => {
    if (currentPage > totalPageNum - 1) {
      return;
    }
    onPageChange(currentPage + 1);
  };

  const paginationNavigatorCls = useMemo(() => {
    return classNameProps
      ? `${paginationNavigatorBaseCls} ${classNameProps}`
      : `${paginationNavigatorBaseCls}`;
  }, [classNameProps]);

  return (
    <div className={paginationNavigatorListCls}>
      <button
        disabled={currentPage <= 1}
        className={paginationNavigatorCls}
        onClick={() => handlePagePrev(currentPage)}
      >
        prev
      </button>
      <button
        disabled={currentPage > totalPageNum - 1}
        className={paginationNavigatorCls}
        onClick={() => handlePageNext(currentPage)}
      >
        next
      </button>
    </div>
  );
};

export default PageNavigator;
