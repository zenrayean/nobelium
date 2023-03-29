import { createContext, useContext, useEffect } from 'react'
import { useMedia } from 'react-use'
import BLOG from '@/blog.config'

const ThemeContext = createContext({ dark: true })

export function ThemeProvider ({ children }) {
  // `defaultState` should normally be a boolean. But it causes initial loading flashes in slow
  // rendering. Setting it to `null` so that we can differentiate the initial loading phase
  const prefersDark = useMedia('(prefers-color-scheme: dark)', null)
  const dark = BLOG.appearance === 'dark' || (BLOG.appearance === 'auto' && prefersDark)

  useEffect(() => {
    // Only decide color scheme after initial loading, i.e. when `dark` is really representing a
    // media query result
    if (typeof dark === 'boolean') {
      document.documentElement.classList.toggle('dark', dark)
      document.documentElement.classList.remove('color-scheme-unset')
    }
  }, [dark])

  useEffect(() => {
    document.documentElement.classList.remove('color-scheme-unset')
  }, [])

  return (
    <ThemeContext.Provider value={{ dark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default function useTheme () {
  return useContext(ThemeContext)
}
