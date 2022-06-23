import { useCallback, useEffect } from 'react'

const useCountUp = (
  ref: React.MutableRefObject<null[] | HTMLSpanElement[]>,
  duration = 2000,
  isActive: boolean,
) => {
  const easeOutQuad = (t: number) => t * (2 - t)

  const animateCountUp = useCallback(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    (el: { innerHTML: string | number } | null) => {
      if (el) {
        const frameDuration = 1000 / 60
        let frame = 0
        const totalFrames = Math.round(duration / frameDuration)
        const countTo = parseInt(el.innerHTML as string, 10)

        const counter = setInterval(() => {
          frame++

          const progress = easeOutQuad(frame / totalFrames)
          const currentCount = Math.round(countTo * progress)

          if (parseInt(el.innerHTML as string, 10) !== currentCount) {
            el.innerHTML = currentCount
          }

          if (frame === totalFrames) {
            clearInterval(counter)
          }
        }, frameDuration)
      }
    },
    [duration],
  )

  useEffect(() => {
    if (isActive) {
      ref.current.forEach(animateCountUp)
    }
  }, [animateCountUp, duration, ref, isActive])
}

export default useCountUp
