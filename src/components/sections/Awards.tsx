import styled from 'styled-components'

import { IMG_BADGE_GOOGLE, IMG_BADGE_APPLE } from '../../constants/imageUrl'
import { FadeProps } from '../../interfaces/Fade'

import { fadeStyles } from './style/fadeStyle'

const AwardsContainer = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;

  // styled-component props에 해당하는 공통 style
  ${fadeStyles}
`

interface AwardItemProps {
  imageUrl: string
}

const AwardItem = styled.div<AwardItemProps>`
  display: inline-block;
  height: 54px;
  margin-right: 39px;
  padding: 5px 0px 5px 62px;
  background-image: url(${(props) => props.imageUrl});
  background-size: 54px 54px;
  background-repeat: no-repeat;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.palette.gray800};
  line-height: 22px;
`

const AwardsComponent = (props: FadeProps) => {
  const { isActive } = props

  return (
    <AwardsContainer isActive={isActive} transition={200}>
      <AwardItem imageUrl={IMG_BADGE_GOOGLE}>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </AwardItem>
      <AwardItem imageUrl={IMG_BADGE_APPLE}>
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </AwardItem>
    </AwardsContainer>
  )
}

export default AwardsComponent
