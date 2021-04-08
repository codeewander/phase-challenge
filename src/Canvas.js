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
  background: green;
  outline: ${(props) => (props.active ? 3 : 0)}px solid #0274ff;
`

const Canvas = () => {
  const {data, setData} = useContext(DataContext)
  const canvasElementIds = data.directory.find(
    (page) => page.id === data.selectedPage
  ).elements
  console.log(canvasElementIds,'canvasElementIds')
  const elements = data.elements.filter((element) =>
    canvasElementIds.includes(element.id)
  )
  console.log(elements,'elements')

  return (
    <CanvasWrapper>
      {elements.map((element) => (
        <Block x={element.detail.x} y={element.detail.y} o={element.detail.o} key={element.id} active={element.id === data.selectedElement}/>
      ))}
    </CanvasWrapper>
  )
}

export default Canvas
