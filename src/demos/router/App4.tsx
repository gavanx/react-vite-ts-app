import { BrowserRouter, MemoryRouter, Switch, Route, Link } from 'react-router-dom'
import { DetailPage, HomePage } from './pages'
import App from './App'

function App4() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to='/'>首页</Link>
          <Link to='/detail'>详情页</Link>
        </div>
        <Switch>
          <Route path='/'>
            <HomePage />
          </Route>
          <Route path='/detail'>
            <DetailPage />
          </Route>
        </Switch>
        <div style={{ marginTop: '500px' }}>
          <h1>App Inner</h1>
          <MemoryRouter>
            <Route path='/'>
              <HomePage />
            </Route>
            <Route path='/detail'>
              <DetailPage />
            </Route>
          </MemoryRouter>
        </div>
      </BrowserRouter>
      {/* <App /> */}
    </div>
  )
}

export default App4
