import { ReactNode, useContext, useMemo } from 'react';
import { CarouselContext } from '.';

import {
  carouselNavigatorBaseCls,
  carouselNavigatorWrapCls,
} from '../../consts/className';

interface CarouselNavigatorProps {
  children: ReactNode;
  className?: string;
}

const CarouselNavigator = (props: CarouselNavigatorProps) => {
  const { className: classNameProps } = props;
  const { carouselIndex, setCarouselIndex, itemLength } =
    useContext(CarouselContext);

  const handleClickPrev = () => {
    if (carouselIndex <= 0) {
      setCarouselIndex(itemLength - 1);
    } else {
      setCarouselIndex((prev) => prev - 1);
    }
  };

  const handleClickNext = () => {
    if (carouselIndex >= itemLength - 1) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex((prev) => prev + 1);
    }
  };

  const carouselNaivigatorCls = useMemo(() => {
    return classNameProps
      ? `${carouselNavigatorBaseCls} ${classNameProps}`
      : `${carouselNavigatorBaseCls}`;
  }, [classNameProps]);

  return (
    <div className={carouselNavigatorWrapCls}>
      <button className={carouselNaivigatorCls} onClick={handleClickPrev}>
        prev {carouselIndex}
      </button>
      <button className={carouselNaivigatorCls} onClick={handleClickNext}>
        next {carouselIndex}
      </button>
    </div>
  );
};

export default CarouselNavigator;
