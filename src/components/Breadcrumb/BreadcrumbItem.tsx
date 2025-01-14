import { useEffect, useRef, useMemo } from 'react';
import { BaseProps } from '../../types/ChildProps';
import { breadcrumbItemsBaseCls } from '../../consts/className';
import { useBreadcrumbContext } from '.';

interface BreadcrumbItemProps extends BaseProps {
  href: string;
  index?: number;
  className?: string;
}

const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  const { children, className: classNameProps, href } = props;
  const crumb = useRef<HTMLAnchorElement>(null);
  const { getItemsWidth } = useBreadcrumbContext();

  const breadcrumbItemCls = useMemo(() => {
    return classNameProps
      ? `${breadcrumbItemsBaseCls} ${classNameProps}`
      : `${breadcrumbItemsBaseCls}`;
  }, []);

  useEffect(() => {
    if (!crumb.current) {
      return;
    }
    const width = crumb.current.getBoundingClientRect().width;
    getItemsWidth(width);
  }, [crumb]);

  return (
    <a className={breadcrumbItemCls} ref={crumb} href={href}>
      {children}
    </a>
  );
};

export default BreadcrumbItem;
