import {
  MemoryRouter,
  Routes,
  Route,
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import AnimatedRoutes from './AnimatedRoutes' // 引入上面创建的动画组件
import { DetailPage, HomePage } from './pages'
import RouteChange from './RouteChange'

const App = () => (
  <div style={{ width: 300, height: 500, background: '#eee' }}>
    <BrowserRouter>
      <AnimatedRoutes>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/detail' element={<DetailPage />} />
        </Routes>
      </AnimatedRoutes>
    </BrowserRouter>
  </div>
)

let router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/detail',
    Component: DetailPage,
  },
  {
    path: '/search',
    Component: DetailPage,
  },
])
const App2 = () => (
  <div style={{ width: 300, height: 500, background: '#eee' }}>
    <RouterProvider router={router}>
      <RouteChange />
    </RouterProvider>
    ,
  </div>
)

export default App2
