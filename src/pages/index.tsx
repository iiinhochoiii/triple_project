import { useRef } from 'react'
import styled from 'styled-components'

import ContentLogoComponent from '../components/ContentLogo'
import MetricsComponent from '../components/Metrics'
import AwardsComponent from '../components/Awards'
import useFadeScroll from '../hooks/useFadeScroll'

const SectionContainer = styled.section`
  display: flex;
`
const ResponsiveSection = styled.div`
  min-width: 1200px;
  margin: 0 auto;
  position: relative;
`

const IndexPage = () => {
  const scrolltRef = useRef(null)
  const { isActive } = useFadeScroll(scrolltRef)

  return (
    <SectionContainer>
      <ResponsiveSection ref={scrolltRef}>
        <ContentLogoComponent isActive={isActive} />
        <MetricsComponent isActive={isActive} />
        <AwardsComponent isActive={isActive} />
      </ResponsiveSection>
    </SectionContainer>
  )
}

export default IndexPage
