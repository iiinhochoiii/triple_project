import styled from 'styled-components'

import ContentLogoComponent from '../components/ContentLogo'

const SectionContainer = styled.section`
  display: flex;
  height: 100vh;
`
const ResponsiveSection = styled.div`
  min-width: 1200px;
  margin: 0 auto;
  display: flex;
`

const IndexPage = () => {
  return (
    <SectionContainer>
      <ResponsiveSection>
        <ContentLogoComponent />
      </ResponsiveSection>
    </SectionContainer>
  )
}

export default IndexPage
