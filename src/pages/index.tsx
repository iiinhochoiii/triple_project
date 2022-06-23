import { useRef } from 'react'
import styled from 'styled-components'

import MainLayout from '../components/layouts/MainLayout'
import ContentLogoComponent from '../components/sections/ContentLogo'
import MetricsComponent from '../components/sections/Metrics'
import AwardsComponent from '../components/sections/Awards'
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
    <MainLayout>
      <SectionContainer>
        <ResponsiveSection ref={scrolltRef}>
          <ContentLogoComponent isActive={isActive} />
          <MetricsComponent isActive={isActive} />
          <AwardsComponent isActive={isActive} />
        </ResponsiveSection>
      </SectionContainer>
    </MainLayout>
  )
}

export default IndexPage
