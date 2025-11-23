import { useCallback, useEffect } from 'react'
import { useNavigate, useLocation, useBlocker, Router } from 'react-router-dom'

// 拦截增强管理器
export const useNavigationManager = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // 拦截配置
  const interceptionConfig = {
    '/search': {
      enhance: (currentParams, nextLocation) => ({
        session_id: getSessionId(),
        utm_source: 'internal_nav',
        entry_time: Date.now(),
        ...Object.fromEntries(currentParams.entries()),
      }),
      condition: (params) => !params.has('session_id'),
    },
    '/checkout': {
      enhance: (currentParams) => ({
        flow_id: generateFlowId(),
        step: 'started',
        ...Object.fromEntries(currentParams.entries()),
      }),
    },
  }

  // 检查是否需要拦截
  const shouldIntercept = useCallback((nextLocation) => {
    const pathname = nextLocation.pathname
    const config = interceptionConfig[pathname]

    if (!config) return false

    if (config.condition) {
      const params = new URLSearchParams(nextLocation.search)
      return config.condition(params)
    }

    return true
  }, [])

  // 增强URL
  const enhanceURL = useCallback((nextLocation) => {
    const pathname = nextLocation.pathname
    const config = interceptionConfig[pathname]
    const currentParams = new URLSearchParams(nextLocation.search)

    const enhancedParams = config.enhance(currentParams, nextLocation)
    const newParams = new URLSearchParams()

    Object.entries(enhancedParams).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        newParams.set(key, String(value))
      }
    })

    return `${pathname}?${newParams.toString()}`
  }, [])

  // 使用useBlocker拦截导航
  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    return shouldIntercept(nextLocation)
  })

  // 处理被拦截的导航
  useEffect(() => {
    if (blocker.state === 'blocked') {
      const nextLocation = blocker.location
      const enhancedPath = enhanceURL(nextLocation)

      console.log('导航被增强:', nextLocation.pathname, '→', enhancedPath)

      // 取消原始拦截，发起增强导航
      blocker.reset()

      // 重要：这里会触发React Router的正常导航流程
      navigate(enhancedPath, {
        state: {
          ...nextLocation.state,
          _originalPath: nextLocation.pathname + nextLocation.search,
          _enhanced: true,
        },
      })
    }
  }, [blocker.state, blocker.location, enhanceURL, navigate])

  // 手动增强导航
  const enhancedNavigate = useCallback(
    (to, options = {}) => {
      if (typeof to === 'string') {
        const nextLocation = { pathname: to, search: '', state: options.state }
        if (shouldIntercept(nextLocation)) {
          const enhancedPath = enhanceURL(nextLocation)
          return navigate(enhancedPath, {
            ...options,
            state: { ...options.state, _enhanced: true },
          })
        }
      }

      return navigate(to, options)
    },
    [navigate, shouldIntercept, enhanceURL]
  )

  return {
    enhancedNavigate,
    isIntercepting: blocker.state === 'blocked',
    currentLocation: location,
  }
}

// 使用示例
export default function BlockDemo() {
  const { enhancedNavigate } = useNavigationManager()

  return (
    <div>
      <button onClick={() => enhancedNavigate('/search?q=react')}>搜索（自动增强）</button>
      <button onClick={() => enhancedNavigate('/checkout')}>结账（自动增强）</button>
    </div>
  )
}

// 工具函数
const generateSessionId = () => Math.random().toString(36).substr(2, 9)
const generateFlowId = () => `flow_${Date.now()}`
const getSessionId = () => sessionStorage.getItem('session_id') || generateSessionId()
