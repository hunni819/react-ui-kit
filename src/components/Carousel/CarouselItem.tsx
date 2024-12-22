import { useContext, useMemo } from 'react';
import { CarouselContext } from '.';
import { carouselItemBaseCls } from '../../consts/className';
import { BaseProps } from '../../types/ChildProps';

interface CarouselItemProps extends BaseProps {
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
