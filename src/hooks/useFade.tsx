import { useState, useEffect } from 'react'

import { FadeProps } from '../interfaces/Fade'

const useFade = (easeInOutSec: number): FadeProps => {
  const [opacity, setOpacity] = useState(0)
  const [transform, setTransform] = useState(10)
  const [transition, setTransition] = useState(0)

  useEffect(() => {
    setOpacity(1)
    setTransform(0)
    setTransition(easeInOutSec)
  }, [easeInOutSec])

  return {
    opacity,
    transform,
    transition,
  }
}

export default useFade
