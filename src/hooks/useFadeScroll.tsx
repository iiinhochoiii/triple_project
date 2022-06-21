import React, { useState, useEffect, useCallback } from 'react'

import { FadeProps } from '../interfaces/Fade'

const useScrollHeight = (
  ref: React.MutableRefObject<null | HTMLDivElement>,
): FadeProps => {
  const [isActive, setIsActive] = useState(false)

  const listener = useCallback(() => {
    const docScrollEl = document.scrollingElement
    const refCur = ref.current

    if (docScrollEl && refCur) {
      if (docScrollEl?.scrollTop < refCur.offsetTop) {
        if (docScrollEl?.scrollTop + 50 >= refCur.offsetTop) {
          setIsActive(true)
        }
      } else if (docScrollEl?.scrollTop > refCur.offsetTop) {
        if (docScrollEl?.scrollTop <= refCur.offsetTop + 50) {
          setIsActive(true)
        }
      }
    }
  }, [ref])

  useEffect(() => {
    if (ref.current) {
      if (ref.current.offsetTop === 0) {
        setIsActive(true)
      }

      if (!isActive) {
        window.addEventListener('scroll', listener)
        return () => {
          window.removeEventListener('scroll', listener)
        }
      }
    }
  }, [listener, ref, isActive])

  return {
    isActive,
  }
}

export default useScrollHeight
