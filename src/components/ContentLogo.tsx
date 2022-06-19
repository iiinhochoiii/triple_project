import styled from 'styled-components'

import { IMG_TRIPLE_LOGO } from '../constants/imageUrl'

const ContentLogoWrap = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  background-image: url(${IMG_TRIPLE_LOGO});
  background-repeat: no-repeat;
  text-align: center;
  box-sizing: border-box;
`

const ContentLogoComponent = () => {
  return <ContentLogoWrap>2021년 12월 기준</ContentLogoWrap>
}

export default ContentLogoComponent
