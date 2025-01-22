import { useMemo, Fragment, cloneElement, useRef, useEffect } from 'react';
import BreadSeperator from './BreadSeperater';
import { useBreadcrumbContext } from '.';
import { breadcrumbEclipseBaseCls } from '@consts/className';

const BreadcrumbPopover = () => {
  const eclipseCrumb = useRef(null);
  const { breadItemsCount, triggerRef, breadItems, handleEclipseRef } =
    useBreadcrumbContext();

  const location = useMemo(() => {
    const triggerDomRect = triggerRef.getBoundingClientRect();

    return {
      top: triggerDomRect.y + triggerDomRect.height,
      left: triggerDomRect.x + triggerDomRect.width / 2,
    };
  }, [triggerRef]);

  const eclipsedCrumb = useMemo(() => {
    return breadItems.slice(1, breadItemsCount - 1);
  }, [breadItems, breadItemsCount, location]);

  useEffect(() => {
    if (!eclipseCrumb.current) {
      return;
    }

    handleEclipseRef(eclipseCrumb.current);
  }, [eclipseCrumb]);

  return (
    <>
      <div
        ref={eclipseCrumb}
        className={breadcrumbEclipseBaseCls}
        style={{ position: 'absolute', ...location }}
      >
        {eclipsedCrumb.map((breadItem, index) => (
          <Fragment key={`eclipsedItem-${index}`}>
            {cloneElement(breadItem)}
            {index < eclipsedCrumb.length - 1 && <BreadSeperator />}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default BreadcrumbPopover;
