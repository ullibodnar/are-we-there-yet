import React, { useState, useEffect } from 'react'
import moment from 'moment'
import styled from 'styled-components'

import TimeBox from './TimeBox'

const DistanceBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6em;
`

// 20190525

const initialState = {
  currentDate: moment(),
  pickedDate: moment('20190502T0805'),
  difference: {}
}

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
    milliseconds: addZeros(Math.floor((m % 1000) / 10))
  }
}

export default () => {
  const [state, setState] = useState(initialState)
  const { currentDate, pickedDate, difference } = state

  const distance = pickedDate.diff(currentDate)

  useEffect(() => {
    setState({ ...state, currentDate: moment(), difference: getTime(distance) })
  })

  return (
    <DistanceBar>
      <TimeBox time={difference.days} title='days' />
      <TimeBox time={difference.hours} title={`hrs`} />
      <TimeBox time={difference.minutes} title={`min`} />
      <TimeBox time={difference.seconds} title={`sec`} />
      <TimeBox time={difference.milliseconds} title={`ms`} />
    </DistanceBar>
  )
}
