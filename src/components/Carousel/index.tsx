import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  FC,
  Children,
  ReactElement,
  cloneElement,
  useMemo,
  ReactNode,
} from 'react';
import CarouselItemList from './CarouselItemList';
import CarouselIndicator from './CarouselIndicator';
import CarouselNavigator from './CarouselNavigator';
import CarouselItem from './CarouselItem';
import { carouselBaseCls } from '../../consts/className';

type CarouselContextProps = {
  carouselIndex: number;
  setCarouselIndex: Dispatch<SetStateAction<number>>;
  itemLength: number;
};

export const CarouselContext = createContext<CarouselContextProps>({
  carouselIndex: 0,
  setCarouselIndex: () => {},
  itemLength: 0,
});

interface CarouselProps {
  children: ReactNode;
  itemLength: number;
  className?: string;
}

interface CarouselCompoundProps {
  ItemList: typeof CarouselItemList;
  Item: typeof CarouselItem;
  Navigator: typeof CarouselNavigator;
  Indicator: typeof CarouselIndicator;
}

const Carousel: FC<CarouselProps> & CarouselCompoundProps = (props) => {
  const { children, itemLength, className: classNameProps } = props;
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselContext = {
    carouselIndex,
    setCarouselIndex,
    itemLength,
  };

  const carousel = Children.toArray(children) as ReactElement[];

  const carouselItemList = carousel.find(
    (child) => child.type === CarouselItemList
  );

  const carouselNavigator = carousel.filter(
    (child) => child.type === CarouselNavigator
  );

  const carouselIndicator = carousel.filter(
    (child) => child.type === CarouselIndicator
  );

  const carouselCls = useMemo(() => {
    return classNameProps
      ? `${carouselBaseCls} ${classNameProps}`
      : `${carouselBaseCls}`;
  }, [classNameProps]);

  return (
    <CarouselContext.Provider value={carouselContext}>
      <div className={carouselCls}>
        {carouselItemList}
        {carouselNavigator.map((button) => cloneElement(button))}
        {carouselIndicator.map((dott) => cloneElement(dott))}
      </div>
    </CarouselContext.Provider>
  );
};

Carousel.ItemList = CarouselItemList;
Carousel.Item = CarouselItem;
Carousel.Navigator = CarouselNavigator;
Carousel.Indicator = CarouselIndicator;

export default Carousel;
