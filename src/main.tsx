import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import Demo from './demos/terminal/TerminalDemo'
import PostDemo from './demos/PostDemo'
import SliceDemo from './demos/SliceDemo'
import ReRender from './demos/ReRender'
import UseTransition from './demos/UseTransition'
import UseTransitionPage from './demos/UseTransitionPage'
import UseStatePart from './demos/UseStatePart'
import UseRefStyle from './demos/UseRefStyle'
import AntdSplitter from './demos/antd/AntdSplitter'
import SSEX from './demos/sse/SSEXChat2'

import RefObject from './interview/RefObject'
import SetCount from './interview/SetCount'
import ReactDemo from './interview/React-setState-timeout'

import QuillEditor from './playground/QuillEditor'

// import 'antd/dist/antd.css'
import './index.css'

import PageLeave from './demos/PageLeave'
import DocumentVisibility from './demos/DocumentVisibility'
import LocalStorage from './demos/LocalStorage2'
import ImageEditor from './demos/image-editor'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<ImageEditor />)
