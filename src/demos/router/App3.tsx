import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { DetailPage, HomePage } from './pages'
import App from './App'

function App3() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to='/'>首页</Link>
          <Link to='/detail'>详情页</Link>
        </div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/detail' element={<DetailPage />} />
        </Routes>
        <div style={{ marginTop: '500px' }}>
          <h1>App Inner</h1>
          <App />
        </div>
      </BrowserRouter>
      {/* <App /> */}
    </div>
  )
}

export default App3
