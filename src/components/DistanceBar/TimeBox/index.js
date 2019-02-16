import React from 'react'
import styled from 'styled-components'

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Courier New', Courier, monospace;
  width: 15%;
`
const Time = styled.div`
  font-size: 4em;
  margin: 0;
  width: 100%;
  text-align: center;
  flex-grow: 4;
  vertical-align: middle;
  font-family: 'Nixie One';
  text-shadow: 0 0 1px #fefc7c, 0 0 3px rgba(255, 217, 54, 0.7), 0 0 5px #ff6a00,
    0 0 14px #ff6a00, 0 0 17px #ff6a00, 0 0 20px red;
`
const TitleBox = styled.div`
  color: white;
  margin: 0;
  width: 100%;
  text-align: center;
  font-size: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
`

export default ({ time, title }) => {
  return (
    <>
      <TimeBox>
        <Time>{time}</Time>
        <TitleBox>{title}</TitleBox>
      </TimeBox>
    </>
  )
}
