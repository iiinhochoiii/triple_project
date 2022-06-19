import styled from 'styled-components'

import ContentLogoComponent from '../components/ContentLogo'
import MetricsComponent from '../components/Metrics'
import AwardsComponent from '../components/Awards'

const SectionContainer = styled.section`
  display: flex;
`
const ResponsiveSection = styled.div`
  min-width: 1200px;
  margin: 0 auto;
  position: relative;
`

const IndexPage = () => {
  return (
    <SectionContainer>
      <ResponsiveSection>
        <ContentLogoComponent />
        <MetricsComponent />
        <AwardsComponent />
      </ResponsiveSection>
    </SectionContainer>
  )
}

export default IndexPage
