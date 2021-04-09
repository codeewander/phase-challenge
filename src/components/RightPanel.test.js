import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import RightPanel from './RightPanel'
import '@testing-library/jest-dom'
import 'jest-styled-components'

const targetElementData = { id: '1-1', x: 10, y: 10, o: 0.5, b: '#addddd' }

describe('<RightPanel/>', () => {
  afterEach(cleanup)
  test('show correct input value', () => {
    const { getByText, getAllByTestId, container } = render(
      <RightPanel
        targetElementData={targetElementData}
        handleChangeInput={()=>{}}
      />
    )

    expect(container.querySelector('input[name="x"]').value).toBe(targetElementData.x.toString())
    expect(container.querySelector('input[name="y"]').value).toBe(targetElementData.y.toString())
    expect(container.querySelector('input[name="o"]').value).toBe(targetElementData.o.toString())
    expect(container.querySelector('input[name="b"]').value).toBe(targetElementData.b)
  })
})
