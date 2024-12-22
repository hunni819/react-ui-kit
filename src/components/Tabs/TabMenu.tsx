import { useContext, useMemo } from 'react';
import { TabsContext } from '.';
import { activeCls, tabsMenuBaseCls } from '../../consts/className';
import { BaseProps } from '../../types/ChildProps';

interface TabMenuProps extends BaseProps {
  index?: number;
  className?: string;
}

const TabMenu = (props: TabMenuProps) => {
  const { children, index, className: classNameProps } = props;
  const { setTabIndex, tabIndex } = useContext(TabsContext);

  const handleOnClick = () => {
    setTabIndex(index ?? 0);
  };

  const tabsMenuCls = useMemo(() => {
    return classNameProps
      ? `${tabsMenuBaseCls} ${classNameProps}`
      : `${tabsMenuBaseCls}`;
  }, []);

  return (
    <div
      className={
        tabIndex === index ? `${tabsMenuCls} ${activeCls}` : `${tabsMenuCls}`
      }
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
};

export default TabMenu;
