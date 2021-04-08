import React, { useContext } from 'react'
import styled from 'styled-components'
import { DataContext } from './contexts/DataContext'

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

const Canvas = ({ selectedElement, fixElements, targetElementData }) => {
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
      <Block
        x={targetElementData.x}
        y={targetElementData.y}
        o={targetElementData.o}
        b={targetElementData.b}
        active
      />
    </CanvasWrapper>
  )
}

export default Canvas
