import styled from 'styled-components'

import { FadeProps } from '../interfaces/Fade'

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

  return (
    <MetricsContainer isActive={isActive} transition={100}>
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
