import React, { useState } from 'react'
import styled from 'styled-components'
import Confetti from 'react-confetti'

import useWindowDimensions from './hooks/useWindowDimensions'

import DistanceBar from './components/DistanceBar'

const StyledHeader = styled.div`
  width: 80%;
  margin: 0 auto;
`

const StyledTitle = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  opacity: 0.2;
  font-weight: 500;
  text-align: center;
`

const StyledBody = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
`

export default () => {
  const [celebrate, setCelebrate] = useState(false)

  const { width, height } = useWindowDimensions()

  return (
    <>
      {celebrate ? <Confetti width={width} height={height} /> : null}

      <StyledHeader>
        <StyledTitle>Are We There Yet?</StyledTitle>
      </StyledHeader>
      <StyledBody>
        <DistanceBar setCelebrate={setCelebrate} />
      </StyledBody>
    </>
  )
}
