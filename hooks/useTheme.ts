import { useTheme as useNextThemes } from 'next-themes'

const useTheme = () => {
  const { theme, setTheme, systemTheme } = useNextThemes()

  const isLight = theme === 'light' || (theme === 'system' && systemTheme === 'light')
  return { isLight, setTheme }
}

export default useTheme
