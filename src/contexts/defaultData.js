export const initialState = {
  directory: [
    { id: '1', name: 'Page 1', elements: ['1-1', '1-2', '1-3'] },
    { id: '2', name: 'Page 2', elements: ['2-4', '2-5'] },
  ],
  elements: [
    {
      id: '1-1',
      name: 'Element 1',
      detail: { x: 10, y: 10, o: 0.5, b: '#addddd' },
    },
    {
      id: '1-2',
      name: 'Element 2',
      detail: {  x: 60, y: 60, o: 0.2, b: '#c0ca00' },
    },
    {
      id: '1-3',
      name: 'Element 3',
      detail: { x: 110, y: 110, o: 0.1, b: '#616161' },
    },
    {
      id: '2-4',
      name: 'Element 4',
      detail: { x: 30, y: 30, o: 0.1, b: '#22dd1a' },
    },
    {
      id: '2-5',
      name: 'Element 5',
      detail: { x: 60, y: 60, o: 1, b: '#233333' },
    },
  ],
  selectedPage: '1',
  selectedElement: '1-1',
  targetElementData: { id: '1-1', x: 10, y: 10, o: 0.5, b: '#addddd' },
}
