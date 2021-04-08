import React from 'react'
import styled from 'styled-components'
import LeftPanel from './LeftPanel'
import Canvas from './Canvas'
import RightPanel from './RightPanel'
import { DataContextProvider } from './contexts/DataContext'

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
    <DataContextProvider>
      <AppWrapper>
        <LeftPanel />
        <Canvas />
        <RightPanel />
      </AppWrapper>
    </DataContextProvider>
  )
}

export default App
