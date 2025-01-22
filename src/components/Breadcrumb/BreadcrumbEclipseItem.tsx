import { useRef, useEffect } from 'react';
import { useBreadcrumbContext } from '.';

const BreadcrumbEclipseItem = () => {
  const eclipseCrumbRef = useRef(null);
  const { setIsOpen, handleTriggerRef } = useBreadcrumbContext();

  const handlePopover = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!eclipseCrumbRef.current) {
      return;
    }

    handleTriggerRef(eclipseCrumbRef.current);
  }, [eclipseCrumbRef]);

  return (
    <span ref={eclipseCrumbRef} onClick={handlePopover}>
      ...
    </span>
  );
};

export default BreadcrumbEclipseItem;
