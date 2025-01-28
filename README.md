# react-ui-kit

## ** Accordion **

### **Children**

- Root
- Item
- Trigger
- Content

### Example

```jsx
<Accordion className="">
  <Accordion.Item className="">
    <Accordion.Trigger className="">Title</Accordion.Trigger>
    <Accordion.Content className="">Content</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item className="">
    <Accordion.Trigger className="">Title</Accordion.Trigger>
    <Accordion.Content className="">content</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item className="">
    <Accordion.Trigger className="">Title</Accordion.Trigger>
    <Accordion.Content className="">Content</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

## ** Progress **

### **Children**

- Root

### Example

```jsx
<Progress className="" stop={stop} value={0} />
```

## ** Tabs **

### **Children**

- Root
- MenuList
- Menu
- Pannel

### Example

```jsx
<Tabs className="">
  <Tabs.MenuList className="">
    <Tabs.Menu className="">Tab 1</Tabs.Menu>
    <Tabs.Menu className="">Tab 2</Tabs.Menu>
    <Tabs.Menu className="">Tab 3</Tabs.Menu>
  </Tabs.MenuList>
  <Tabs.Pannel className="">Content-1</Tabs.Pannel>
  <Tabs.Pannel className="">Content-2</Tabs.Pannel>
  <Tabs.Pannel className="">Content-3</Tabs.Pannel>
</Tabs>
```

<!--
## ** Carousel **

### **Children**

- Root
- ItemList
- Item
- Navigator
- Indicator

### Example

```jsx
<Carousel itemLength={3}>
  <CarouselItemList>
    <CarouselItem index={0}></CarouselItem>
    <CarouselItem index={1}></CarouselItem>
    <CarouselItem index={2}></CarouselItem>
  </CarouselItemList>
  <CarouselNavigator />
  <CarouselIndicator />
</Carousel>
```

## ** Calendar **

### **Children**

- Root
- Current
- Navigator
- Body

### Example

```jsx
<Calendar onChange={handleChangeDate} value={date}>
  <Calendar.Current />
  <Calendar.Navigator />
  <Calendar.Body />
</Calendar>
```

## ** Pagination **

### **Children**

- Root
- PageButtons
- Navigator

### Example

```jsx
<Pagination
  itemLength={235}
  value={page}
  pageSize={10}
  onPageChange={handlePageChange}
>
  <Pagination.PageButtons />
  <Pagination.Navigator />
</Pagination>
```

## ** Popover **

### **Children**

- Root
- Trigger
- Content

### Example

```jsx
<Popover>
  <Popover.Trigger>Open</Popover.Trigger>
  <Popover.Content>Place content for the popover here.</Popover.Content>
</Popover>
```

## ** Modal **

### **Children**

- Root
- Backdrop
- Trigger
- Content
- Close

### Example

```jsx
<Modal
  onCloseModal={handleCloseModal}
  onOpenModal={handleOpenModal}
  open={isOpen}
>
  <Modal.Backdrop />
  <Modal.Trigger />
  <Modal.Content>
    <Modal.Close />
    <div>Modal Content</div>
  </Modal.Content>
</Modal>
```

## ** DatePicker **

### **Children**

- Root

### Example

```jsx
<DatePicker date={new Date()} onChangeDate={handleChangeDate} />
```

## ** Breadcrumb **

### **Children**

- Root
- Item

### Example

```jsx
<Breadcrumb width="500px">
  <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a">A-A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a">A-A-A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a-a">A-A-A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a-a-a">A-A-A</Breadcrumb.Item>
</Breadcrumb>
```

## ** Select **

### **Children**

- Root
- Trigger
- Content
- Item

### Example

````jsx
<Select onChange={handleChangeValue} value={selectedValue}>
  <Select.Trigger />

  <Select.Content>
    <Select.Item value={'1'}>One</Select.Item>
    <Select.Item value={'2'}>Two</Select.Item>
    <Select.Item value={'3'}>Three</Select.Item>
  </Select.Content>
</Select>
``` -->

```

```
