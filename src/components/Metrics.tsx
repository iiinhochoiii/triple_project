import { useRef } from 'react'
import styled from 'styled-components'

import { FadeProps } from '../interfaces/Fade'
import useCountUpAnimation from '../hooks/useCountUpAnimation'

import { fadeStyles } from './style/fadeStyle'

const MetricsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;

  // styled-component props에 해당하는 공통 style
  ${fadeStyles}
`

const MetricItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.palette.gray};
`

const MetricsComponent = (props: FadeProps) => {
  const { isActive } = props
  const countRef = useRef<null[] | HTMLSpanElement[]>([])

  useCountUpAnimation(countRef)

  return (
    <MetricsContainer isActive={isActive} transition={100}>
      <MetricItem>
        <strong>
          <span ref={(el) => (countRef.current[0] = el)}>{350}</span>명
        </strong>
        의 사용자
      </MetricItem>
      <MetricItem>
        <strong>
          <span ref={(el) => (countRef.current[1] = el)}>{21}</span>만 개
        </strong>
        의 리뷰
      </MetricItem>
      <MetricItem>
        <strong>
          <span ref={(el) => (countRef.current[2] = el)}>{650}</span>만 개
        </strong>
        의 저장
      </MetricItem>
    </MetricsContainer>
  )
}

export default MetricsComponent
