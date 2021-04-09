import React from 'react'
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
import Elements from './Elements'
import '@testing-library/jest-dom'
import 'jest-styled-components'

const elements = [
  {
    id: '1-1',
    name: 'Element 1',
    detail: { x: 10, y: 10, o: 0.5, b: '#addddd' },
  },
  {
    id: '1-2',
    name: 'Element 2',
    detail: { x: 60, y: 60, o: 0.2, b: '#c0ca00' },
  },
  {
    id: '1-3',
    name: 'Element 3',
    detail: { x: 110, y: 110, o: 0.1, b: '#616161' },
  },
]

describe('<Elements/>', () => {
  afterEach(cleanup)

  test('show correct element names', () => {
    const { getByText, getAllByTestId } = render(
      <Elements
        selectedElement={null}
        elements={elements}
        selectPage={() => {}}
        renameItem={() => {}}
      />
    )
    expect(getAllByTestId('elementItem').length).toBe(3)
    expect(getByText('Element 1')).toBeInTheDocument()
    expect(getByText('Element 2')).toBeInTheDocument()
    expect(getByText('Element 3')).toBeInTheDocument()
  })

  test('selected element show correct color', () => {

    const selectElement = jest.fn()
    const { getByText } = render(
      <Elements
        selectedElement={'1-2'}
        elements={elements}
        selectElement={selectElement}
        renameItem={() => {}}
      />
    )
    expect(getByText('Element 2')).toHaveStyleRule('color', '#0274ff')
    expect(getByText('Element 1')).not.toHaveStyleRule('color', '#0274ff')
    fireEvent.click(getByText('Element 1'))
    expect(selectElement).toHaveBeenCalledTimes(1)
  })

  test('double click element name and rename element name', () => {

    const renameItem = jest.fn()
    const { getByText, getByRole } = render(
      <Elements
        selectedElement={'1-2'}
        elements={elements}
        selectPage={() => {}}
        renameItem={renameItem}
      />
    )
    fireEvent.doubleClick(getByText('Element 1'))
    expect(getByRole('textbox')).toHaveAttribute('value', 'Element 1')
    fireEvent.blur(getByRole('textbox'))
    expect(renameItem).toHaveBeenCalledTimes(1)
  })
})
