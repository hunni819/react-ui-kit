import { ReactNode, useContext, useMemo } from 'react';
import { CarouselContext } from '.';
import { carouselItemBaseCls } from '@consts/className';

interface CarouselItemProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

const CarouselItem = (props: CarouselItemProps) => {
  const { index, children, className: classNameProps } = props;
  const { carouselIndex } = useContext(CarouselContext);

  const carouselItemCls = useMemo(() => {
    return classNameProps
      ? `${carouselItemBaseCls} ${classNameProps}`
      : `${carouselItemBaseCls}`;
  }, [classNameProps]);

  return (
    <>
      {index === carouselIndex ? (
        <div className={carouselItemCls}>{children}</div>
      ) : null}
    </>
  );
};

export default CarouselItem;
