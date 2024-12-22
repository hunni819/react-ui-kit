const prefixCls = 'jh';

const getBaseCls = (suffix: string) => {
  return `${prefixCls}-${suffix}`;
};

/** Component */
export const activeCls = getBaseCls('active');

/** Tabs Component */
export const tabsBaseCls = getBaseCls('tabs');

export const tabsMenuListBaseCls = getBaseCls('tabs-menu-list');
export const tabsMenuBaseCls = getBaseCls('tabs-menu');
export const tabsPannelListBaseCls = getBaseCls('tabs-pannel-list');
export const tabsPannelBaseCls = getBaseCls('tabs-pannel');

/** Carousel Component */
export const carouselBaseCls = getBaseCls('carousel');

export const carouselItemListBaseCls = getBaseCls('carousel-item-list');
export const carouselItemBaseCls = getBaseCls('carousel-item');
export const carouselNavigatorWrapCls = getBaseCls('carousel-navigator-wrap');
export const carouselNavigatorBaseCls = getBaseCls('carousel-navigator');
export const carouselIndicatorWrapCls = getBaseCls('carousel-indicator-wrap');
export const carouselIndicatorBaseCls = getBaseCls('carousel-indicator');

/** Calendar Component */
export const calendarBaseCls = getBaseCls('calendar');

export const calendarBodyWrapCls = getBaseCls('calendar-body-wrap');
export const calendarBodyBaseCls = getBaseCls('calendar-body');
export const calendarCurrentWrapCls = getBaseCls('calendar-current-wrap');
export const calendarCurrentBaseCls = getBaseCls('calendar-current');
export const calendarNavigatorWrapCls = getBaseCls('calendar-navigator-wrap');
export const calendarNavigatorBaseCls = getBaseCls('calendar-navigator');

/** Pagination Component */
export const paginationBaseCls = getBaseCls('pagination');

export const paginationButtonListCls = getBaseCls('pagination-button-list');
export const paginationButtonBaseCls = getBaseCls('pagination-button');
export const paginationNavigatorListCls = getBaseCls(
  'pagination-navigator-list'
);
export const paginationNavigatorBaseCls = getBaseCls('pagination-navigator');

/** Popover Component */
export const popoverBaseCls = getBaseCls('popover');

export const popoverContentWrapCls = getBaseCls('popover-content-wrap');
export const popoverContentBaseCls = getBaseCls('popover-content');
export const popoverTriggerWrapCls = getBaseCls('popover-trigger-wrap');
export const popoverTriggerBaseCls = getBaseCls('popover-trigger');

/** Breadcrumb Component */
export const breadcrumbBaseCls = getBaseCls('breadcrumb');
export const breadcrumbEclipseBaseCls = getBaseCls('breadcrumb-eclipse');
export const breadcrumbSeperatorBaseCls = getBaseCls('breadcrumb-seperator');
export const breadcrumbItemsBaseCls = getBaseCls('breadcrumb-item');
