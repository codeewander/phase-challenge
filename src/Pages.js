import React, { useState, useContext, memo } from 'react'
import styled from 'styled-components'

const PagesWrapper = styled.div`
  border-bottom: 1px solid;
  padding-bottom: 16px;
`
const PageText = styled.div`
  color: ${(props) => (props.active ? '#0274ff' : '#fff')};
  cursor: pointer;
`

const Pages = ({ selectedPage, directory, selectPage, renameItem }) => {
  console.log('render page')
  const [editTarget, setEditTarget] = useState(null)
  const [pageTitle, setPageTitle] = useState('')

  const setEditStatus = (id) => {
    setEditTarget(id)
    setPageTitle(directory.find((page) => page.id === id).name)
  }

  const removeEditStatus = (id) => {
    setEditTarget(null)
    renameItem(directory, id, pageTitle)
  }

  const editText = (e) => {
    setPageTitle(e.target.value)
  }

  return (
    <PagesWrapper>
      <h4>Pages</h4>
      {directory.map((page) =>
        editTarget === page.id ? (
          <input
            type="text"
            value={pageTitle}
            onChange={editText}
            onBlur={() => removeEditStatus(page.id)}
            key={page.id}
            maxlength="20"
          />
        ) : (
          <PageText
            active={selectedPage === page.id}
            onClick={() => selectPage(page.id)}
            onDoubleClick={(e) => setEditStatus(page.id)}
            key={page.id}
          >
            {page.name}
          </PageText>
        )
      )}
    </PagesWrapper>
  )
}

export default memo(Pages)
