import { Children, cloneElement, ReactElement, useMemo } from 'react';
import { tabsMenuListBaseCls } from '../../consts/className';
import { BaseProps } from '../../types/ChildProps';

interface TabMenuListProps extends BaseProps {
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
