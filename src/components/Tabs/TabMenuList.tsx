import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react';
import { tabsMenuListBaseCls } from '../../consts/className';

interface TabMenuListProps {
  children: ReactNode;
  className?: string;
}

const TabMenuList = (props: TabMenuListProps) => {
  const { children, className: classNameProps } = props;

  const menus = Children.toArray(children) as ReactElement[];

  const tabsMenuListCls = useMemo(() => {
    return classNameProps
      ? `${tabsMenuListBaseCls} ${classNameProps}`
      : `${tabsMenuListBaseCls}`;
  }, []);

  return (
    <div className={tabsMenuListCls}>
      {menus.map((menu, index) =>
        cloneElement(menu, { index }, `Tab-${index}`)
      )}
    </div>
  );
};

export default TabMenuList;
