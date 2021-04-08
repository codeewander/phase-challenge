import React from 'react'
import ReactDOM from 'react-dom'
import { DataContextProvider } from './contexts/DataContext'
import App from './App'
import './styles.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>,
  rootElement
)
