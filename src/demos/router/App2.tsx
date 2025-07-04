import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AnimatedRoutes from './AnimatedRoutes'
import { DetailPage, HomePage } from './pages'

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>首页</Link>
        <Link to='/detail'>详情页</Link>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <AnimatedRoutes>
                <HomePage />
              </AnimatedRoutes>
            }
          />
          <Route
            path='/detail'
            element={
              <AnimatedRoutes>
                <DetailPage />
              </AnimatedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
