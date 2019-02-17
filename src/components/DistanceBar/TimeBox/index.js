import React from 'react'
import styled, { keyframes } from 'styled-components'

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Courier New', Courier, monospace;
  width: 15%;
  max-width: 11vmin;
  position: relative;
`

const flicker = keyframes`
  0% {
    opacity: 1
  }
    
  50% {
    opacity: 0.8

  }
  100% {
    opacity: 1

  }
`

const Time = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 8vmin;
  margin: 0 auto;
  width: 100%;
  font-family: 'Nixie One';
  text-shadow: 0 0 1px #fefc7c, 0 0 3px rgba(255, 217, 54, 0.7), 0 0 5px #ff6a00,
    0 0 14px #ff6a00, 0 0 17px #ff6a00, 0 0 20px red;
  animation: ${flicker} 0.001s infinite;
`

const LayeredTime = styled.p`
  display: flex;
  align-items: center;
  font-family: 'Nixie One';
  position: absolute;
  margin: 0 auto;
  font-size: 8vmin;
  left: 0;
  right: 0;
  text-align: center;
  opacity: 0.02;
  justify-content: space-between;
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

const IndNumber = styled.span`
  width: 50%;
  text-align: center;
`

export default ({ time = '00', title }) => {
  return (
    <>
      <TimeBox>
        <Time>
          <IndNumber>{`${time}`.charAt(0)}</IndNumber>
          <IndNumber>{`${time}`.charAt(1)}</IndNumber>
        </Time>
        <LayeredTime>
          <IndNumber>0</IndNumber>
          <IndNumber>0</IndNumber>
        </LayeredTime>
        <LayeredTime>
          <IndNumber>1</IndNumber>
          <IndNumber>1</IndNumber>
        </LayeredTime>
        <LayeredTime>
          <IndNumber>2</IndNumber>
          <IndNumber>2</IndNumber>
        </LayeredTime>
        <LayeredTime>
          <IndNumber>3</IndNumber>
          <IndNumber>3</IndNumber>
        </LayeredTime>
        <LayeredTime>
          <IndNumber>4</IndNumber>
          <IndNumber>4</IndNumber>
        </LayeredTime>
        <LayeredTime>
          <IndNumber>5</IndNumber>
          <IndNumber>5</IndNumber>
        </LayeredTime>
        <LayeredTime>
          <IndNumber>6</IndNumber>
          <IndNumber>6</IndNumber>
        </LayeredTime>
        <LayeredTime>
          <IndNumber>7</IndNumber>
          <IndNumber>7</IndNumber>
        </LayeredTime>
        <LayeredTime>
          <IndNumber>8</IndNumber>
          <IndNumber>8</IndNumber>
        </LayeredTime>
        <LayeredTime>
          <IndNumber>9</IndNumber>
          <IndNumber>9</IndNumber>
        </LayeredTime>
        <TitleBox>{title}</TitleBox>
      </TimeBox>
    </>
  )
}
