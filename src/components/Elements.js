import React, { memo, useState } from 'react'
import styled from 'styled-components'

const ElementText = styled.div`
  color: ${(props) => (props.active ? '#0274ff' : '#fff')};
  cursor: pointer;
`

const Elements = ({ selectElement, selectedElement, renameItem, elements }) => {
  const [editTarget, setEditTarget] = useState(null)
  const [elementTitle, setElementTitle] = useState(' ')

  const setEditStatus = (id) => {
    setEditTarget(id)
    setElementTitle(elements.find((element) => element.id === id).name)
  }

  const editText = (e) => {
    setElementTitle(e.target.value)
  }

  const removeEditStatus = (id) => {
    setEditTarget(null)
    renameItem(elements, id, elementTitle)
  }
  return (
    <div>
      <h4>Elements</h4>
      {elements.map((element) =>
        editTarget === element.id ? (
          <input
            type="text"
            value={elementTitle}
            onChange={editText}
            onBlur={() => removeEditStatus(element.id)}
            key={element.id}
            maxlength="20"
          />
        ) : (
          <ElementText
            active={selectedElement === element.id}
            onClick={() => selectElement(element.id)}
            onDoubleClick={(e) => setEditStatus(element.id)}
            key={element.id}
          >
            {element.name}
          </ElementText>
        )
      )}
    </div>
  )
}

export default memo(Elements)
