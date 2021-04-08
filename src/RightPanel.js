import React, { useState, useEffect,useContext } from 'react'
import styled from 'styled-components'
import ColorPicker from './ColorPicker'
import { DataContext } from './contexts/DataContext'

const RightPanelWrapper = styled.div`
  padding: 8px;
`
const Label = styled.label`
  display: grid;
  grid-template-columns: 16px auto minmax(0, 1fr);
  grid-gap: 8px;
`
const RightPanel = () => {
  const { data, setData } = useContext(DataContext)
  const [fields, setValues] = useState({
    x: 0,
    y: 0,
    o: 0,
    b: '',
    id: null,
  });

  useEffect(()=>{
    setValues({
      id: data.targetElementData.id,
      x: data.targetElementData.x,
      y: data.targetElementData.y,
      o: data.targetElementData.o,
      b: data.targetElementData.b,
    })
  },[data.targetElementData])

  return (
    <RightPanelWrapper>
      <Label>
        X <input type="number" min={0} max={999} value={fields.x} />
      </Label>
      <Label>
        Y <input type="number" min={0} max={999} value={fields.y} />
      </Label>
      <Label>
        O <input type="number" min={0} max={1} value={fields.o} step={0.1}/>
        <input type="range" min={0} max={1} value={fields.o} step={0.1}/>
      </Label>
      <Label>
        B <ColorPicker color={fields.b}/> {fields.b}
      </Label>
    </RightPanelWrapper>
  )
}

export default RightPanel
