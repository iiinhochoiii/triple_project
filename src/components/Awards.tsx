import styled from 'styled-components'

import { IMG_BADGE_GOOGLE, IMG_BADGE_APPLE } from '../constants/imageUrl'

const AwardsContainer = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
`

interface AwardItemProps {
  imageUrl: string
}

const AwardItem = styled.div<AwardItemProps>`
  display: inline-block;
  background-image: url(${(props) => props.imageUrl});
  background-size: 54px 54px;
  height: 54px;
  background-repeat: no-repeat;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  font-weight: bold;
`

const AwardsComponent = () => {
  return (
    <AwardsContainer>
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
