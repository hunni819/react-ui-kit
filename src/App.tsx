import { Breadcrumb } from './components';

function App() {
  return (
    <Breadcrumb width={100}>
      <Breadcrumb.Item href={'/a'}>A</Breadcrumb.Item>
      <Breadcrumb.Item href={'/a-a'}>A-A</Breadcrumb.Item>
      <Breadcrumb.Item href={'/a-a-a'}>A-A-A</Breadcrumb.Item>
      <Breadcrumb.Item href={'/a-a-a-a'}>A-A-A</Breadcrumb.Item>
      <Breadcrumb.Item href={'/a-a-a-a-a'}>A-A-A</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default App;

// import { Calendar, Carousel, Breadcrumb, Pagination, Tabs } from './components';
// const [currentDate, setCurrentDate] = useState(new Date());
// const handleChangeDate = (date: Date) => {
//   setCurrentDate(date);
// };

// const [currentPage, setCurrentPage] = useState(1);
// const handlePageChange = (page: number) => {
//   setCurrentPage(page);
// };

{
  /* <Tabs className={'tab'}>
        <Tabs.MenuList>
          <Tabs.Menu>Tab 1</Tabs.Menu>
          <Tabs.Menu>Tab 2</Tabs.Menu>
          <Tabs.Menu>Tab 3</Tabs.Menu>
        </Tabs.MenuList>
        <Tabs.Pannel>Content-1</Tabs.Pannel>
        <Tabs.Pannel>Content-2</Tabs.Pannel>
        <Tabs.Pannel>Content-3</Tabs.Pannel>
      </Tabs>
      <br />
      <Carousel itemLength={3}>
        <Carousel.ItemList>
          <Carousel.Item>Item 0</Carousel.Item>
          <Carousel.Item>Item 1</Carousel.Item>
          <Carousel.Item>Item 2</Carousel.Item>
        </Carousel.ItemList>
        <Carousel.Navigator />
        <Carousel.Indicator />
      </Carousel>
      <br />
      <Calendar onChange={handleChangeDate} value={currentDate}>
        <Calendar.Current />
        <Calendar.Navigator />
        <Calendar.Body />
      </Calendar>
      <br />
      <Pagination
      className={'pagination'}
      itemLength={235}
      value={currentPage}
      onPageChange={handlePageChange}
      pageSize={10}
    >
      <Pagination.PageButtons></Pagination.PageButtons>
      <Pagination.Navigator></Pagination.Navigator>
    </Pagination>
      <br />
      <Breadcrumb width={100}>
        <Breadcrumb.Item href={'/a'}>A</Breadcrumb.Item>
        <Breadcrumb.Item href={'/a-a'}>A-A</Breadcrumb.Item>
        <Breadcrumb.Item href={'/a-a-a'}>A-A-A</Breadcrumb.Item>
        <Breadcrumb.Item href={'/a-a-a-a'}>A-A-A</Breadcrumb.Item>
        <Breadcrumb.Item href={'/a-a-a-a-a'}>A-A-A</Breadcrumb.Item>
      </Breadcrumb> */
}
