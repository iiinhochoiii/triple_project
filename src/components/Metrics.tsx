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

  const countUser = useCountUpAnimation(350, 2000)
  const countReview = useCountUpAnimation(21, 2000)
  const countSave = useCountUpAnimation(650, 2000)

  return (
    <MetricsContainer isActive={isActive} transition={100}>
      <MetricItem>
        <strong>{countUser}만 명</strong>의 사용자
      </MetricItem>
      <MetricItem>
        <strong>{countReview}만 개</strong>의 리뷰
      </MetricItem>
      <MetricItem>
        <strong>{countSave}만 개</strong>의 저장
      </MetricItem>
    </MetricsContainer>
  )
}

export default MetricsComponent
