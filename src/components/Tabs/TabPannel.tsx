import { useContext, useMemo } from 'react';
import { TabsContext } from '.';
import {
  tabsPannelBaseCls,
  tabsPannelListBaseCls,
} from '../../consts/className';
import { BaseProps } from '../../types/ChildProps';

interface TabPannelProps extends BaseProps {
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
