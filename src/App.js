import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import LeftPanel from './LeftPanel'
import ControlView from './ControlView'

const AppWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 200px auto 200px;
  background: #232323;
  height: 100vh;
  color: white;
`
const App = () => {
  return (
    <AppWrapper>
      <LeftPanel />
      <ControlView />
    </AppWrapper>
  )
}

export default App
