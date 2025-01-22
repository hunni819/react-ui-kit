import React, {
  createContext,
  useState,
  Dispatch,
  Children,
  ReactElement,
  cloneElement,
  FC,
  useMemo,
  ReactNode,
} from 'react';

import TabMenuList from './TabMenuList';
import TabPannel from './TabPannel';
import TabMenu from './TabMenu';
import { tabsBaseCls } from '../../consts/className';

type TabContextProps = {
  tabIndex: number;
  setTabIndex: Dispatch<React.SetStateAction<number>>;
};

export const TabsContext = createContext<TabContextProps>({
  tabIndex: 0,
  setTabIndex: () => {},
});

interface TabsProps {
  children: ReactNode;
  className?: string;
}

interface TabsCompoundProps {
  MenuList: typeof TabMenuList;
  Menu: typeof TabMenu;
  Pannel: typeof TabPannel;
}

const Tabs: FC<TabsProps> & TabsCompoundProps = (props) => {
  const { children, className: classNameProps } = props;
  const [tabIndex, setTabIndex] = useState<number>(0);

  const tabContext = {
    tabIndex,
    setTabIndex,
  };

  const tabs = Children.toArray(children) as ReactElement[];

  const tabMenuList = tabs.find((child) => child.type === TabMenuList);
  const tabPannel = tabs.filter((child) => child.type === TabPannel);

  const tabCls = useMemo(() => {
    return classNameProps
      ? `${tabsBaseCls} ${classNameProps}`
      : `${tabsBaseCls}`;
  }, [classNameProps]);

  return (
    <TabsContext.Provider value={tabContext}>
      <div className={tabCls}>
        {tabMenuList}
        {tabPannel.map((pannel, index) => cloneElement(pannel, { index }))}
      </div>
    </TabsContext.Provider>
  );
};

Tabs.MenuList = TabMenuList;
Tabs.Menu = TabMenu;
Tabs.Pannel = TabPannel;

export default Tabs;
