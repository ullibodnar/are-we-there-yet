import React from 'react'
import styled from 'styled-components'

import DistanceBar from './components/DistanceBar'

const StyledHeader = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`

const StyledTitle = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  opacity: 0.2;
  font-weight: 500;
`

const StyledBody = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 10px;
`

export default () => {
  return (
    <>
      <StyledHeader>
        <StyledTitle>Are We There Yet?</StyledTitle>
      </StyledHeader>
      <StyledBody>
        <DistanceBar />
      </StyledBody>
    </>
  )
}
