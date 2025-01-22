import {
  Fragment,
  Children,
  cloneElement,
  createContext,
  FC,
  useRef,
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import { breadcrumbBaseCls } from '../../consts/className';
import BreadSeperator from './BreadSeperater';
import { createPortal } from 'react-dom';
import BreadcrumbEclipseItem from './BreadcrumbEclipseItem';
import BreadcrumbPopover from './BreadcrumbPopover';

interface BreadcrumbCompound {
  Item: typeof BreadcrumbItem;
}

interface BreadcrumbProps {
  children: ReactNode;
  width: number;
  className?: string;
}

export type BreadcrumbContextType = {
  breadItemsCount: number;
  getItemsWidth: (width: number) => void;
  getSerperatorWidth: (width: number) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleTriggerRef: (refCurrent: HTMLSpanElement) => void;
  handleEclipseRef: (refCurrent: HTMLDivElement) => void;
  triggerRef: HTMLSpanElement;
  breadItems: ReactElement[];
};

const BreadcrumbContext = createContext<BreadcrumbContextType>({
  breadItemsCount: 0,
  getItemsWidth: () => {},
  getSerperatorWidth: () => {},
  setIsOpen: () => {},
  handleTriggerRef: () => {},
  handleEclipseRef: () => {},
  triggerRef: document.createElement('span'),
  breadItems: [],
});

export const useBreadcrumbContext = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error('BreadcrumbContext 내부에서 사용해주세요.');
  }
  return context;
};

const Breadcrumb: FC<BreadcrumbProps> & BreadcrumbCompound = (props) => {
  const { children, className: classNameProps, width } = props;
  const breadcrumbRef = useRef(document.createElement('div'));
  const [totalWidth, setTotalWidth] = useState(0);
  const [isOverflow, setIsOverflow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [triggerRef, setTriggerRef] = useState<HTMLSpanElement>(
    document.createElement('span')
  );
  const [eclipseRef, setEclipseRef] = useState<HTMLSpanElement>(
    document.createElement('div')
  );

  const breadcrumb = useMemo(() => {
    return Children.toArray(children) as ReactElement[];
  }, [children]);

  const breadItems = useMemo(() => {
    return breadcrumb.filter((child) => child.type === BreadcrumbItem);
  }, [breadcrumb]);

  const breadItemsCount = useMemo(() => {
    return breadItems.length;
  }, [breadItems]);

  const getItemsWidth = useCallback((width: number) => {
    setTotalWidth((prev) => prev + width);
  }, []);

  const getSerperatorWidth = useCallback((width: number) => {
    setTotalWidth((prev) => prev + width);
  }, []);

  const handleTriggerRef = useCallback((refCurrent: HTMLSpanElement) => {
    setTriggerRef(refCurrent);
  }, []);

  const handleEclipseRef = useCallback((refCurrent: HTMLDivElement) => {
    setEclipseRef(refCurrent);
  }, []);

  const handleOutsider = (e: MouseEvent) => {
    if (
      isOpen &&
      !triggerRef.contains(e.target as Node) &&
      breadcrumbRef.current &&
      !breadcrumbRef.current.contains(e.target as Node) &&
      !eclipseRef.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const eclipseUI = useCallback(() => {
    if (!isOverflow) {
      return breadItems.map((breadItem, index) => (
        <Fragment key={`breadItem-${index}`}>
          {cloneElement(breadItem)}
          {index < breadItemsCount - 1 && <BreadSeperator />}
        </Fragment>
      ));
    }

    return (
      <>
        {breadItems[0] && cloneElement(breadItems[0])}
        <BreadSeperator />
        <BreadcrumbEclipseItem />
        <BreadSeperator />
        {breadItems[breadItemsCount - 1] &&
          cloneElement(breadItems[breadItemsCount - 1])}
      </>
    );
  }, [isOverflow]);

  const breadcrumbContext = {
    breadItemsCount,
    getItemsWidth,
    getSerperatorWidth,
    setIsOpen,
    handleTriggerRef,
    handleEclipseRef,
    triggerRef,
    breadItems,
  };

  const breadcrumbCls = useMemo(() => {
    return classNameProps
      ? `${breadcrumbBaseCls} ${classNameProps}`
      : `${breadcrumbBaseCls}`;
  }, [classNameProps]);

  useEffect(() => {
    if (totalWidth > width) {
      setIsOverflow(true);
    } else {
      setIsOverflow(false);
    }

    document.addEventListener('click', handleOutsider);

    return () => {
      document.removeEventListener('click', handleOutsider);
    };
  }, [totalWidth, width]);

  return (
    <BreadcrumbContext.Provider value={breadcrumbContext}>
      <div className={breadcrumbCls} ref={breadcrumbRef}>
        {eclipseUI()}
        {isOpen && createPortal(<BreadcrumbPopover />, document.body)}
      </div>
    </BreadcrumbContext.Provider>
  );
};

Breadcrumb.Item = BreadcrumbItem;
export default Breadcrumb;
