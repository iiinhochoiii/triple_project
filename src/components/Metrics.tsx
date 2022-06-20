import styled from 'styled-components'

import useFade from '../hooks/useFade'
import { fadeStyles } from '../styles/fadeStyle'

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

const MetricsComponent = () => {
  const { opacity, transform, transition } = useFade(100)

  return (
    <MetricsContainer
      opacity={opacity}
      transform={transform}
      transition={transition}
    >
      <MetricItem>
        <strong>350만 명</strong>의 사용자
      </MetricItem>
      <MetricItem>
        <strong>21만 개</strong>의 리뷰
      </MetricItem>
      <MetricItem>
        <strong>650만 개</strong>의 저장
      </MetricItem>
    </MetricsContainer>
  )
}

export default MetricsComponent
