import React, { useState, useEffect, useCallback } from 'react'

import { FadeProps } from '../interfaces/Fade'

const useScrollHeight = (
  scrollRef: React.MutableRefObject<null | HTMLDivElement>,
): FadeProps => {
  const [isActive, setIsActive] = useState(false)

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (target.isIntersecting) {
      setIsActive(true)
    }
  }, [])

  useEffect(() => {
    if (!isActive) {
      const observer = new IntersectionObserver(handleObserver, {
        // viewport 기준에서 해당 영역 50%가 보이도록
        threshold: 0.5,
      })
      if (scrollRef.current) {
        observer.observe(scrollRef.current)
      }
    }
  }, [handleObserver, isActive, scrollRef])

  return {
    isActive,
  }
}

export default useScrollHeight
