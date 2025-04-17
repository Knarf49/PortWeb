// hooks/useFirstLoad.ts
import { useEffect, useState } from 'react'

export const useFirstLoad = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(false)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited')
    if (!hasVisited) {
      setIsFirstLoad(true)
      sessionStorage.setItem('hasVisited', 'true')
    }
  }, [])

  return isFirstLoad
}
