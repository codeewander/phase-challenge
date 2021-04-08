import React, { useContext } from 'react'
import styled from 'styled-components'
import { DataContext } from './contexts/DataContext'

const PagesWrapper = styled.div`
  border-bottom: 1px solid;
  padding-bottom: 16px;
`
const PageText = styled.div`
  color: ${(props) => (props.active ? '#0274ff' : '#fff')};
  cursor: pointer;
`

const Pages = () => {
  const { data, setData } = useContext(DataContext)

  const selectPage = (id) => {
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
  }
  return (
    <PagesWrapper>
      <h4>Pages</h4>
      {data.directory.map((page) => (
        <PageText
          active={data.selectedPage === page.id}
          onClick={() => selectPage(page.id)}
        >
          {page.name}
        </PageText>
      ))}
    </PagesWrapper>
  )
}

export default Pages
