import { useState, useEffect } from 'react'

const initialDimensions = {
  width: window.innerWidth,
  height: window.innerHeight
}

export default () => {
  const [dimensions, setDimensions] = useState(initialDimensions)

  useEffect(() => {
    const setEvent = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', setEvent())

    return () => window.removeEventListener('resize', setEvent())
  })

  return dimensions
}
