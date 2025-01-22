import { ReactNode, useContext, useMemo } from 'react';
import { CarouselContext } from '.';

import {
  carouselActiveCls,
  carouselIndicatorBaseCls,
  carouselIndicatorWrapCls,
} from '../../consts/className';

interface CarouselItemProps {
  children: ReactNode;
  className?: string;
}

const CarouselIndicator = (props: CarouselItemProps) => {
  const { className: classNameProps } = props;
  const { setCarouselIndex, itemLength, carouselIndex } =
    useContext(CarouselContext);
  const indicatorArray = Array.from(
    { length: itemLength },
    (_, index: number) => index + 1
  );

  const handleIndicator = (index: number) => {
    setCarouselIndex(index);
  };

  const carouselIndicatorCls = useMemo(() => {
    return classNameProps
      ? `${carouselIndicatorBaseCls} ${classNameProps}`
      : `${carouselIndicatorBaseCls}`;
  }, [classNameProps]);

  return (
    <div className={carouselIndicatorWrapCls}>
      {indicatorArray.map((current, index) => (
        <button
          key={`indicator-${index}`}
          className={
            carouselIndex === index
              ? `${carouselIndicatorCls} ${carouselActiveCls}}`
              : `${carouselIndicatorCls}`
          }
          onClick={() => handleIndicator(index)}
        >
          dott {current}
        </button>
      ))}
    </div>
  );
};

export default CarouselIndicator;
