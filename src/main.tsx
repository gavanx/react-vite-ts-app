import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MainDemo from './demos/MainDemo'
import 'antd/dist/antd.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainDemo />
  </React.StrictMode>
)
