import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

import './anim.css'

// 定义路由切换时的动画组件
const AnimatedRoutes = ({ children }) => {
  const location = useLocation(); // 监听当前路由位置
  console.log(location.pathname)
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname} // 路由变化时触发重新渲染 
        classNames={location.pathname === '/' ? "page2" : 'page'}
        timeout={{ enter: 300, exit: 200 }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
export default AnimatedRoutes