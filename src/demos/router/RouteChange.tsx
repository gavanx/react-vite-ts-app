import { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default () => {
  const params = useParams()
  const paramsString = JSON.stringify(params, Object.keys(params).sort())
  const { pathname, search } = useLocation()

  useEffect(() => {
    try {
      console.log('xxxx RouteChange', {
        path: pathname,
        name: 'xxxx',
        params: paramsString,
      })
    } catch {}
    return () => {}
  }, [paramsString, pathname, search])

  return <div>xxxxx</div>
}
