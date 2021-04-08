import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { DataContext } from './contexts/DataContext'

const ElementsWrapper = styled.div``

const ElementText = styled.div`
  color: ${(props) => (props.active ? '#0274ff' : '#fff')};
  cursor: pointer;
`

const Elements = () => {
  const { data, setData } = useContext(DataContext)
  const [editTarget, setEditTarget] = useState(null);
  const [elementTitle, setElementTitle] = useState(" ");
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

  const setEditStatus = (id) => {
    setEditTarget(id);
    setElementTitle(data.elements.find((element) => element.id === id).name);
  };

  const editText = (e) => {
    setElementTitle(e.target.value);
  };

  const removeEditStatus = (id) => {
    setEditTarget(null);
    const targetElementIndex = data.elements.findIndex(
      (element) => element.id === id
    );
    const cloneElements = data.elements;
    const targetElement = cloneElements[targetElementIndex];
    targetElement.name = elementTitle;
    setData({...data, elements: cloneElements})
  };
  return (
    <ElementsWrapper>
      <h4>Elements</h4>
      {elementsData.map((element) => (
        editTarget === element.id ? (
          <input
            type="text"
            value={elementTitle}
            onChange={editText}
            onBlur={() => removeEditStatus(element.id)}
            key={element.id}
            maxlength="20"
          />
        ) :
        (<ElementText
          active={data.selectedElement === element.id}
          onClick={() => selectElement(element.id)}
          onDoubleClick={(e) => setEditStatus(element.id)}
        >
          {element.name}
        </ElementText>)
      ))}
    </ElementsWrapper>
  )
}

export default Elements
