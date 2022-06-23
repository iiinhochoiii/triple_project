import { useRef } from 'react'
import styled from 'styled-components'

import { FadeProps } from '../../interfaces/Fade'
import useCountUpAnimation from '../../hooks/useCountUpAnimation'

import { fadeStyles } from './style/fadeStyle'

const MetricsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;

  // styled-component props에 해당하는 공통 style
  ${fadeStyles}
`

const MetricItem = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  color: ${(props) => props.theme.palette.gray};
  letter-spacing: -1px;
`

const MetricsComponent = (props: FadeProps) => {
  const { isActive } = props
  const countRef = useRef<null[] | HTMLSpanElement[]>([])

  const metrics = [
    { id: 0, count: 350, unit: '만 명', text: '의 사용자' },
    { id: 1, count: 21, unit: '만 개', text: '의 리뷰' },
    { id: 2, count: 650, unit: '만 개', text: '의 저장' },
  ]

  // Hook은 반드시 반환할 필요가 없다고 문서에 명시되어있음
  // https://reactjs.org/docs/hooks-effect.html
  useCountUpAnimation(countRef, 2000, isActive)

  return (
    <MetricsContainer isActive={isActive} transition={100}>
      {metrics.map((metric) => (
        <MetricItem key={metric.id}>
          <strong>
            <span ref={(el) => (countRef.current[metric.id] = el)}>
              {metric.count}
            </span>
            {metric.unit}
          </strong>
          {metric.text}
        </MetricItem>
      ))}
    </MetricsContainer>
  )
}

export default MetricsComponent
