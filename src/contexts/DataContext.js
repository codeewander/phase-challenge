import React, { useState, createContext } from 'react'
import { initialState } from './defaultData'

export const DataContext = createContext()

export const DataContextProvider = (props) => {
  const [data, setData] = useState(initialState)

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}
