import { css } from 'styled-components'

import { FadeStyleProps } from '../../../interfaces/Fade'

export const fadeStyles = css<FadeStyleProps>`
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transform: translateY(${(props) => (props.isActive ? '0%' : '10px')});
  transition: all 700ms ease-in-out ${(props) => props.transition}ms;
`
