import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './styles/global-styles'
import IndexPage from './pages/index'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
