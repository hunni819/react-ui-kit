import { useEffect, useRef } from 'react';
import { breadcrumbSeperatorBaseCls } from '../../consts/className';
import { useBreadcrumbContext } from '.';

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
    <span ref={seperator} className={breadcrumbSeperatorBaseCls}>
      {'>'}
    </span>
  );
};

export default BreadSeperator;
