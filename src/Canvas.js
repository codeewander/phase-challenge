import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { DataContext } from './contexts/DataContext'
import Draggable from 'react-draggable'

const CanvasWrapper = styled.div`
  position: relative;
  background: white;
  overflow: hidden;
`

const Block = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  opacity: ${(props) => props.o};
  background: ${(props) => props.b};
  border: ${(props) => (props.active ? 3 : 0)}px solid #0274ff;
`

const Canvas = ({
  selectedElement,
  fixElements,
  targetElementData,
  resetPosition,
}) => {
  let startPointX, startPointY
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleStartDrag = (e, data) => {
    startPointX = data.lastX
    startPointY = data.lastY
  }

  const handleStopDrag = (e, data) => {
    const x = targetElementData.x + data.lastX - startPointX
    const y = targetElementData.y + data.lastY - startPointY
    resetPosition(x, y)
  }
  return (
    <CanvasWrapper>
      {fixElements.map((element) => (
        <Block
          x={element.detail.x}
          y={element.detail.y}
          o={element.detail.o}
          b={element.detail.b}
          key={element.id}
        />
      ))}
      <Draggable
        onStart={handleStartDrag}
        onStop={handleStopDrag}
        position={position}
      >
        <Block
          x={targetElementData.x}
          y={targetElementData.y}
          o={targetElementData.o}
          b={targetElementData.b}
          active
        />
      </Draggable>
    </CanvasWrapper>
  )
}

export default Canvas
