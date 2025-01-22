import { createContext, FC, ReactNode, useContext, useMemo } from 'react';
import PageButtons from './PageButtons';
import PageNavigator from './PageNavigator';
import { paginationBaseCls } from '@consts/className';

interface PaginationProps {
  children: ReactNode;
  itemLength: number;
  value: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  className: string;
}

export interface PageNationContextType {
  totalPageNum: number;
  value: number;
  onPageChange: (page: number) => void;
}

interface PaginationCompound {
  PageButtons: typeof PageButtons;
  Navigator: typeof PageNavigator;
}

const PageNationContext = createContext<PageNationContextType>({
  totalPageNum: 0,
  value: 0,
  onPageChange: () => {},
});

export const usePageNationContext = () => {
  const context = useContext(PageNationContext);

  if (!context) {
    throw new Error('PageNationContext 내부에서 사용가능합니다.');
  }

  return context;
};

const Pagination: FC<PaginationProps> & PaginationCompound = (props) => {
  const {
    children,
    itemLength,
    value,
    onPageChange,
    pageSize,
    className: classNameProps,
  } = props;

  const totalPageNum = useMemo(() => {
    return Math.ceil(itemLength / pageSize);
  }, [itemLength, pageSize]);

  const pageContext = {
    totalPageNum,
    value,
    onPageChange,
  };

  const paginationCls = useMemo(() => {
    return classNameProps
      ? `${paginationBaseCls} ${classNameProps}`
      : `${classNameProps}`;
  }, []);

  return (
    <PageNationContext.Provider value={pageContext}>
      <div className={paginationCls}>
        <>{children}</>
      </div>
    </PageNationContext.Provider>
  );
};

Pagination.PageButtons = PageButtons;
Pagination.Navigator = PageNavigator;

export default Pagination;
