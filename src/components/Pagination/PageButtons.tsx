import { ReactNode, useMemo } from 'react';
import { usePageNationContext } from './';
import usePaging from './hooks/usePaging';
import {
  pageNumActiveCls,
  paginationButtonBaseCls,
  paginationButtonListCls,
} from '@consts/className';

interface PageButtonsProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

const PageButtons = (props: PageButtonsProps) => {
  const { className: classNameProps } = props;

  const { value, totalPageNum, onPageChange } = usePageNationContext();
  const { currentPage, pages } = usePaging(value, totalPageNum);

  const handleCurrentPage = (page: number) => {
    onPageChange(page);
  };

  const paginationButtonCls = useMemo(() => {
    return classNameProps
      ? `${paginationButtonBaseCls} ${classNameProps}`
      : `${classNameProps}`;
  }, [classNameProps]);

  return (
    <div className={paginationButtonListCls}>
      {pages?.map((page: number, index) => (
        <button
          className={
            currentPage - 1 === page
              ? `${paginationButtonCls} ${pageNumActiveCls}`
              : `${paginationButtonCls}`
          }
          key={`page-${index}}`}
          onClick={() => handleCurrentPage(page + 1)}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
};

export default PageButtons;
