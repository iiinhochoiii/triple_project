import { css } from 'styled-components'

import { FadeProps } from '../interfaces/Fade'

export const fadeStyles = css<FadeProps>`
  opacity: ${(props) => props.opacity};
  transform: translateY(${(props) => `${props.transform}px`});
  transition: all 700ms ease-in-out ${(props) => props.transition}ms;
`
