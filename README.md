# react-ui-kit

## ** Tabs **

### **Children**

- Root
- MenuList
- Menu
- Pannel

### Example

```jsx
<Tabs>
  <Tabs.MenuList>
    <Tabs.Menu>Tab 1</Tabs.Menu>
    <Tabs.Menu>Tab 2</Tabs.Menu>
    <Tabs.Menu>Tab 3</Tabs.Menu>
  </Tabs.MenuList>
  <Tabs.Pannel>Content-1</Tabs.Pannel>
  <Tabs.Pannel>Content-2</Tabs.Pannel>
  <Tabs.Pannel>Content-3</Tabs.Pannel>
</Tabs>
```

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
