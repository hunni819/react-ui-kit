import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react';
import { carouselItemListBaseCls } from '@consts/className';

interface CarouselItemListProps {
  children: ReactNode;
  className?: string;
}

const CarouselItemList = (props: CarouselItemListProps) => {
  const { children, className: classNameProps } = props;

  const ItemList = Children.toArray(children) as ReactElement[];

  const carouselItemListCls = useMemo(() => {
    return classNameProps
      ? `${carouselItemListBaseCls} ${classNameProps}`
      : `${carouselItemListBaseCls}`;
  }, [classNameProps]);

  return (
    <div className={carouselItemListCls}>
      {ItemList.map((item, index) =>
        cloneElement(item, { index }, `carousel-item-${index}`)
      )}
    </div>
  );
};

export default CarouselItemList;
