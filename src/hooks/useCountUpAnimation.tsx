import { useState, useEffect } from 'react'

const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0)

  const easeOutQuad = (t: number) => t * (2 - t)

  useEffect(() => {
    const frameDuration = 1000 / 60
    let frame = 0
    const totalFrames = Math.round(duration / frameDuration)
    const counter = setInterval(() => {
      frame++
      const progress = easeOutQuad(frame / totalFrames)
      setCount(end * progress)

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)
  }, [duration, end])

  return Math.floor(count)
}

export default useCountUp
