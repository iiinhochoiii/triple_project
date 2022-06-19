import styled from 'styled-components'

import { CONTENT_LOGO } from '../constants/imageUrl'

const ContentLogoWrap = styled.div`
  background-image: url(${CONTENT_LOGO});
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  background-repeat: no-repeat;
  padding-top: 280px;
  font-size: 15px;
  text-align: center;
`

const ContentLogoComponent = () => {
  return <ContentLogoWrap>2021년 12월 기준</ContentLogoWrap>
}

export default ContentLogoComponent
