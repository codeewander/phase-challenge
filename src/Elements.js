import React, { useContext } from 'react'
import styled from 'styled-components'
import { DataContext } from './contexts/DataContext'

const ElementsWrapper = styled.div``

const ElementText = styled.div`
  color: ${(props) => (props.active ? '#0274ff' : '#fff')};
  cursor: pointer;
`

const Elements = () => {
  const { data, setData } = useContext(DataContext)
  const elementsList = data.directory.find(
    (page) => page.id === data.selectedPage
  ).elements
  const elementsData = data.elements.filter((element) =>
    elementsList.includes(element.id)
  )


  const selectElement = (id) => {
    setData({
      ...data,
      selectedElement: id,
      targetElementData: data.elements.find((element) => element.id === id).detail
    })
  };
  return (
    <ElementsWrapper>
      <h4>Elements</h4>
      {elementsData.map((element) => (
        <ElementText
          active={data.selectedElement === element.id}
          onClick={() => selectElement(element.id)}
        >
          {element.name}
        </ElementText>
      ))}
    </ElementsWrapper>
  )
}

export default Elements
