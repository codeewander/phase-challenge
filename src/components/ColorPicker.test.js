import React from 'react'
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
import ColorPicker from './ColorPicker'
import '@testing-library/jest-dom'
import 'jest-styled-components'

const color = '#00aaaa'
const handleChange=jest.fn()

describe('<ColorPicker/>', () => {
  afterEach(cleanup)

  test('colorInput has correct value', () => {
    const { getByTestId } = render(
      <ColorPicker color={color} handleChange={handleChange} />
    )

    expect(getByTestId('colorInput')).toHaveAttribute('value', color)
    fireEvent.change(getByTestId('colorInput'),{target:{value: '#333333'}})
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
