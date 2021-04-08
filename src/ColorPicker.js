import React, { memo, useRef, useEffect } from 'react'
import styled from 'styled-components'

const ColorPickerWrapper = styled.div`
  width: 16px;
  height: 16px;
  align-self: center;
  overflow: hidden;
`
const ColorInput = styled.input`
  opacity: 0;
  display: block;
  width: 32px;
  height: 32px;
  border: none;
`
ColorInput.defaultProps = {
  type: 'color',
}
const ColorPicker = ({ color }) => {
  const ref = useRef()
  const inputRef = useRef()
  useEffect(() => {
    ref.current.style.background = inputRef.current.value
  }, [color])
  return (
    <ColorPickerWrapper ref={ref}>
      <ColorInput value={color} ref={inputRef} />
    </ColorPickerWrapper>
  )
}

export default memo(ColorPicker)
