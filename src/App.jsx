import { useState } from "react"
import GridLayout from "react-grid-layout"
import styled from "styled-components"

import "./App.css"

function App() {
  const [cols, setCols] = useState(12)
  const [rows, setRows] = useState(8)
  const [gap, setGap] = useState(10)

  const gridProps = {
    className: "layout",
    cols: cols,
    rows: rows,
    margin: [gap, gap],
    rowHeight: 64,
    autoSize: true,
    allowOverlap: true,
    width: 1020
  }

  return (
    <GridContainer>
      <StyledGridLayout {...gridProps} gap={gap}>
        <GridLayoutItem key="a" data-grid={{ x: 0, y: 0, w: 1, h: 1 }}>
          a
        </GridLayoutItem>
        <GridLayoutItem key="b" data-grid={{ x: 1, y: 0, w: 1, h: 1 }}>
          b
        </GridLayoutItem>
        <GridLayoutItem key="c" data-grid={{ x: 2, y: 0, w: 1, h: 1 }}>
          c
        </GridLayoutItem>
        <GridLayoutItem key="d" data-grid={{ x: 3, y: 0, w: 1, h: 1 }}>
          d
        </GridLayoutItem>
        <GridLayoutItem key="e" data-grid={{ x: 4, y: 0, w: 1, h: 1 }}>
          e
        </GridLayoutItem>
        <GridLayoutItem key="f" data-grid={{ x: 5, y: 0, w: 1, h: 1 }}>
          f
        </GridLayoutItem>
        {/* <GridLayoutItem key="g" data-grid={{ x: 6, y: 0, w: 1, h: 1 }}>
          g
        </GridLayoutItem>
        <GridLayoutItem key="h" data-grid={{ x: 7, y: 0, w: 1, h: 1 }}>
          h
        </GridLayoutItem>
        <GridLayoutItem key="i" data-grid={{ x: 8, y: 0, w: 1, h: 1 }}>
          i
        </GridLayoutItem>
        <GridLayoutItem key="j" data-grid={{ x: 9, y: 0, w: 1, h: 1 }}>
          j
        </GridLayoutItem>
        <GridLayoutItem key="k" data-grid={{ x: 10, y: 0, w: 1, h: 1 }}>
          k
        </GridLayoutItem>
        <GridLayoutItem key="l" data-grid={{ x: 11, y: 0, w: 1, h: 1 }}>
          l
        </GridLayoutItem> */}
      </StyledGridLayout>
      <GridPreview columns={gridProps.cols} rows={gridProps.rows} gap={gap}>
        {Array.from({ length: gridProps.cols * gridProps.rows }, (_, i) => (
          <GridPreviewItem key={i}>{/* {i + 1} */}</GridPreviewItem>
        ))}
      </GridPreview>
    </GridContainer>
  )
}

export default App

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const StyledGridLayout = styled(GridLayout)`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: -${(props) => props.gap}px;
  margin-right: -${(props) => props.gap}px;
  width: 100%;
  max-width: 1000px;
`

const GridLayoutItem = styled.div`
  width: 100%;
  background-color: #ff0000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;

  &:nth-child(2) {
    background-color: #00ff00;
  }

  &:nth-child(3) {
    background-color: #0000ff;
  }

  &:nth-child(4) {
    background-color: #ffff00;
  }

  &:nth-child(5) {
    background-color: #ff00ff;
  }

  &:nth-child(6) {
    background-color: #00ffff;
  }
`

const GridPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  grid-gap: 1px;
  margin-top: 10px;
  gap: ${(props) => props.gap}px;
  width: 100%;
  max-width: 1000px;
`

const GridPreviewItem = styled.div`
  width: 100%;
  height: 64px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`
