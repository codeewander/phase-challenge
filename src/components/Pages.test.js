import React from 'react'
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
import Pages from './Pages'
import '@testing-library/jest-dom'
import 'jest-styled-components'

const directory = [
  { id: '1', name: 'Test 1', elements: ['1-1', '1-2', '1-3'] },
  { id: '2', name: 'Test 2', elements: ['2-4', '2-5'] },
]

describe('<Page/>', () => {
  afterEach(cleanup)

  test('show correct page names', () => {
    const { getByText, getAllByTestId } = render(
      <Pages
        selectedPage={'1'}
        directory={directory}
        selectPage={() => {}}
        renameItem={() => {}}
      />
    )

    expect(getByText('Test 1')).toBeInTheDocument()
    expect(getByText('Test 2')).toBeInTheDocument()
    expect(getAllByTestId('pageItem').length).toBe(2)
  })

  test('selected page show correct color', () => {
    const selectPage = jest.fn()
    const { getByText } = render(
      <Pages
        selectedPage={'1'}
        directory={directory}
        selectPage={selectPage}
        renameItem={() => {}}
      />
    )
    expect(getByText('Test 1')).toHaveStyleRule('color', '#0274ff')
    expect(getByText('Test 2')).not.toHaveStyleRule('color', '#0274ff')
    fireEvent.click(getByText('Test 2'))
    expect(selectPage).toHaveBeenCalledTimes(1)
  })

  test('double click page name and rename page name', () => {
    const renameItem = jest.fn()
    const { getByText, getByRole } = render(
      <Pages
        selectedPage={'1'}
        directory={directory}
        selectPage={() => {}}
        renameItem={renameItem}
      />
    )
    fireEvent.doubleClick(getByText('Test 1'))
    expect(getByRole('textbox')).toBeInTheDocument()
    expect(getByRole('textbox')).toHaveAttribute('value', 'Test 1')
    fireEvent.blur(getByRole('textbox'))
    expect(renameItem).toHaveBeenCalledTimes(1)
  })

})
