import React, { memo } from 'react'
import styled from 'styled-components'
import ColorPicker from './ColorPicker'

const RightPanelWrapper = styled.div`
  padding: 8px;
`
const Label = styled.label`
  display: grid;
  grid-template-columns: 16px auto minmax(0, 1fr);
  grid-gap: 8px;
`
const RightPanel = ({ targetElementData, handleChangeInput }) => {
  return (
    <RightPanelWrapper>
      <Label>
        X{' '}
        <input
          type="number"
          name="x"
          min={0}
          max={999}
          value={targetElementData.x}
          onChange={handleChangeInput}
        />
      </Label>
      <Label>
        Y{' '}
        <input
          type="number"
          name="y"
          min={0}
          max={999}
          value={targetElementData.y}
          onChange={handleChangeInput}
        />
      </Label>
      <Label>
        O{' '}
        <input
          type="number"
          name="o"
          min={0}
          max={1}
          value={targetElementData.o}
          step={0.1}
          onChange={handleChangeInput}
        />
        <input
          type="range"
          name="o"
          min={0}
          max={1}
          value={targetElementData.o}
          step={0.1}
          onChange={handleChangeInput}
        />
      </Label>
      <Label>
        B{' '}
        <ColorPicker
          color={targetElementData.b}
          handleChange={handleChangeInput}
        />{' '}
        {targetElementData.b}
      </Label>
    </RightPanelWrapper>
  )
}

export default memo(RightPanel)
