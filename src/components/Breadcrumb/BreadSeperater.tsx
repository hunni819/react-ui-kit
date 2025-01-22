import { useEffect, useRef } from 'react';
import { useBreadcrumbContext } from '.';
import { breadcrumbSeperateBaseCls } from '@consts/className';

const BreadSeperator = () => {
  const seperator = useRef<HTMLSpanElement>(null);
  const { getSerperatorWidth } = useBreadcrumbContext();

  useEffect(() => {
    if (!seperator.current) {
      return;
    }
    const width = seperator.current.getBoundingClientRect().width;
    getSerperatorWidth(width);
  }, []);

  return (
    <span ref={seperator} className={breadcrumbSeperateBaseCls}>
      {'>'}
    </span>
  );
};

export default BreadSeperator;
