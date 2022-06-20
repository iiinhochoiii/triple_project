import styled from 'styled-components'

import useFade from '../hooks/useFade'
import { IMG_TRIPLE_LOGO } from '../constants/imageUrl'
import { fadeStyles } from '../styles/fadeStyle'

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
  color: ${(props) => props.theme.palette.gray700};

  // styled-component props에 해당하는 공통 style
  ${fadeStyles}
`

const ContentLogoComponent = () => {
  const { opacity, transform, transition } = useFade(0)

  return (
    <ContentLogoWrap
      opacity={opacity}
      transform={transform}
      transition={transition}
    >
      2021년 12월 기준
    </ContentLogoWrap>
  )
}

export default ContentLogoComponent
