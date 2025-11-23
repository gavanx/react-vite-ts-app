import { Link } from 'react-router-dom'
import BlockDemo from './BlockDemo'

export const HomePage = () => (
  <div style={{ height: 500, background: '#ddd', position: 'absolute' }}>
    <h1>Home Page</h1>
    <Link to='/detail'>从左向右</Link>
    <BlockDemo />
  </div>
)

export const DetailPage = () => (
  <div style={{ height: 500, background: '#eee', position: 'absolute' }}>
    <h1>Detail Page</h1>
    <Link to='/'>从右向左</Link>
  </div>
)
