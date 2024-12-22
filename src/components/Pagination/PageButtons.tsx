import { useMemo } from 'react';
import { usePageNationContext } from './';
import usePaging from './hooks/usePaging';
import {
  activeCls,
  paginationButtonBaseCls,
  paginationButtonListCls,
} from '../../consts/className';
import { BaseProps } from '../../types/ChildProps';

interface PageButtonsProps extends BaseProps {
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
              ? `${paginationButtonCls} ${activeCls}`
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
