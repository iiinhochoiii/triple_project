// 해당 Component는 공통으로 사용되는 Layout으로,
// 실제로는 특정 섹션만 구현하였으므로, header및 footer 영역은 주석처리 하였습니다.

interface Props {
  children: React.ReactNode
}

const BaseTemplates = (props: Props) => {
  const { children } = props

  return (
    <>
      {/* <header>Header 영역</header> */}
      <main>{children}</main>
      {/* <footer>Footer 영역</footer> */}
    </>
  )
}

export default BaseTemplates
