import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'
import styled from 'styled-components'

import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

import TimeBox from './TimeBox'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const DistanceBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 480px) {
    flex-direction: row;
  }
`

// 20190502T0805

const initialState = {
  currentDate: moment(),
  pickedDate: moment('20220107T0805'),
  difference: {},
  randoms: [
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random()
  ]
}

console.log(moment.tz.guess())

function addZeros (ex) {
  if (ex < 10) {
    if (ex <= 0) {
      return `00`
    } else {
      return `0${ex}`
    }
  }
  return ex
}

function getTime (m) {
  return {
    days: addZeros(Math.floor(m / 1000 / 60 / 60 / 24)),
    hours: addZeros(Math.floor((m / 1000 / 60 / 60) % 24)),
    minutes: addZeros(Math.floor((m / 1000 / 60) % 60)),
    seconds: addZeros(Math.floor((m / 1000) % 60)),
    milliseconds: addZeros(Math.floor(m % 1000))
  }
}

export default ({ setCelebrate }) => {
  const [state, setState] = useState(initialState)
  const { currentDate, pickedDate, difference, randoms } = state

  const distance = pickedDate.diff(currentDate)

  // const { width } = useWindowDimensions()

  useEffect(() => {
    if (distance <= 0) {
      setCelebrate(true)
    }
    setState({
      ...state,
      currentDate: moment(),
      difference: getTime(distance)
    })
  })

  return (
    <>
      <DistanceBar>
        <TimeBox time={difference.days} title='days' flicker={randoms[0]} />
        <TimeBox time={difference.hours} title={`hrs`} flicker={randoms[1]} />
        <TimeBox time={difference.minutes} title={`min`} flicker={randoms[2]} />
        <TimeBox time={difference.seconds} title={`sec`} flicker={randoms[3]} />
        <TimeBox
          time={difference.milliseconds}
          title={`100's`}
          flicker={randoms[4]}
        />
      </DistanceBar>
      {/* <DayPickerInput value={pickedDate} /> */}
    </>
  )
}
