import React, { useState, useEffect, useContext, useCallback } from 'react'
import Canvas from './components/Canvas'
import RightPanel from './components/RightPanel'
import { DataContext } from './contexts/DataContext'

function ControlView() {
  const { data, setData } = useContext(DataContext)
  const [fields, setValues] = useState(data.targetElementData)

  const canvasElementIds = data.directory.find(
    (page) => page.id === data.selectedPage
  ).elements
  const elements = data.elements.filter((element) =>
    canvasElementIds.includes(element.id)
  )
  const fixElements = elements.filter(
    (element) => element.id !== data.selectedElement
  )

  const resetPosition = useCallback((x, y) => {
    setData((prev) => ({
      ...prev,
      targetElementData: {
        ...prev.targetElementData,
        x: x,
        y: y,
      },
    }))
  }, [])

  const handleChangeInput = useCallback((e) => {
    e.persist()
    if (e.target.name === 'b') {
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    } else {
      setValues((prev) => ({
        ...prev,
        [e.target.name]: Number(e.target.value),
      }))
    }
  }, [])

  useEffect(() => {
    setValues(data.targetElementData)
  }, [data.selectedElement, data.targetElementData])

  useEffect(() => {
    const targetElementIndex = data.elements.findIndex(
      (element) => element.id === fields.id
    )
    let cloneElements = data.elements
    const targetElement = cloneElements[targetElementIndex]
    targetElement.detail = fields
    setData({
      ...data,
      elements: cloneElements,
    })
  }, [data.selectedElement])

  return (
    <>
      <Canvas
        fixElements={fixElements}
        targetElementData={fields}
        resetPosition={resetPosition}
      />
      <RightPanel
        targetElement={data.targetElement}
        targetElementData={fields}
        handleChangeInput={handleChangeInput}
      />
    </>
  )
}

export default ControlView
