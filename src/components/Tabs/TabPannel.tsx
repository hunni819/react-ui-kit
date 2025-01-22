import { ReactNode, useContext, useMemo } from 'react';
import { TabsContext } from '.';
import { tabsPannelBaseCls, tabsPannelListBaseCls } from '@consts/className';

interface TabPannelProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

const TabPannel = (props: TabPannelProps) => {
  const { children, index, className: classNameProps } = props;
  const { tabIndex } = useContext(TabsContext);

  const tabPannelCls = useMemo(() => {
    return classNameProps
      ? `${tabsPannelBaseCls} ${classNameProps}`
      : `${tabsPannelBaseCls}`;
  }, [classNameProps]);

  return (
    <div className={tabsPannelListBaseCls}>
      {index === tabIndex ? (
        <div className={tabPannelCls}>{children}</div>
      ) : null}
    </div>
  );
};

export default TabPannel;
