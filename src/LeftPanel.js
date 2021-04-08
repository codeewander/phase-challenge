import React, { useContext, useCallback } from 'react'
import styled from 'styled-components'
import Pages from './components/Pages'
import Elements from './components/Elements'
import { DataContext } from './contexts/DataContext'

const LeftPanelWrapper = styled.div`
  padding: 8px;
`
const LeftPanel = () => {
  const { data, setData } = useContext(DataContext)
  const elementsList = data.directory.find(
    (page) => page.id === data.selectedPage
  ).elements
  const elementsListData = data.elements.filter((element) =>
    elementsList.includes(element.id)
  )

  const selectPage = useCallback((id) => {
    const isElementNotFound = data.directory
      .find((page) => page.id === id)
      .elements.some((element) => element !== data.selectedElement)
    const defaultSelectElement = data.directory.find((page) => page.id === id)
      .elements[0]
    // if selectedElement can't find in selectedPage, then set the first element of this page as default select element
    if (isElementNotFound) {
      setData({
        ...data,
        selectedPage: id,
        selectedElement: defaultSelectElement,
        targetElementData: {
          ...data.elements.find(
            (element) => element.id === defaultSelectElement
          ).detail,
          id: defaultSelectElement,
        },
      })
    } else {
      setData({
        ...data,
        selectPage: id,
      })
    }
  }, [])

  const selectElement = useCallback((id) => {
    setData({
      ...data,
      selectedElement: id,
      targetElementData: {
        ...data.elements.find((element) => element.id === id).detail,
        id: id,
      },
    })
  }, [])

  const renameItem = useCallback((items, targetId, newName) => {
    const targetIndex = items.findIndex((item) => item.id === targetId)
    const cloneItems = items
    const targetItem = cloneItems[targetIndex]
    targetItem.name = newName
    setData({ ...data, items: cloneItems })
  }, [])

  return (
    <LeftPanelWrapper>
      <Pages
        selectedPage={data.selectedPage}
        directory={data.directory}
        selectPage={selectPage}
        renameItem={renameItem}
      />
      <Elements
        selectedElement={data.selectedElement}
        elements={elementsListData}
        selectElement={selectElement}
        renameItem={renameItem}
      />
    </LeftPanelWrapper>
  )
}

export default LeftPanel
