import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes'; // 引入上面创建的动画组件
import { DetailPage, HomePage } from './pages';


const App = () => (
  <div style={{width: 300, height: 500, background: '#eee'}}>
    <Router>
      <AnimatedRoutes> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </AnimatedRoutes>
    </Router>
  </div>
);

export default App