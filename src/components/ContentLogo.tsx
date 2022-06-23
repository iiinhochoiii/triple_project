import styled from 'styled-components'

import { IMG_TRIPLE_LOGO } from '../constants/imageUrl'
import { FadeProps } from '../interfaces/Fade'

import { fadeStyles } from './style/fadeStyle'

const ContentLogoWrap = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  font-weight: 500;
  background-image: url(${IMG_TRIPLE_LOGO});
  background-repeat: no-repeat;
  text-align: center;
  box-sizing: border-box;
  color: ${(props) => props.theme.palette.gray700};

  // styled-component props에 해당하는 공통 style
  ${fadeStyles}
`

const ContentLogoComponent = (props: FadeProps) => {
  const { isActive } = props

  return (
    <ContentLogoWrap isActive={isActive} transition={0}>
      2021년 12월 기준
    </ContentLogoWrap>
  )
}

export default ContentLogoComponent
