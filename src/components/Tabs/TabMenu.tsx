import { ReactNode, useContext, useMemo } from 'react';
import { TabsContext } from '.';
import { tabActiveCls, tabsMenuBaseCls } from '../../consts/className';

interface TabMenuProps {
  children: ReactNode;
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
        tabIndex === index ? `${tabsMenuCls} ${tabActiveCls}` : `${tabsMenuCls}`
      }
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
};

export default TabMenu;
