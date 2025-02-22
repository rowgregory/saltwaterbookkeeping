import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSystemTheme, setIsSystemTheme] = useState(true) // To track if system theme is selected

  // Check if there's a saved theme in localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
      setIsSystemTheme(false) // User explicitly chose dark
    } else if (savedTheme === 'light') {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
      setIsSystemTheme(false) // User explicitly chose light
    } else {
      // If no theme is saved, check system preference
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDarkMode)
      if (prefersDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [])

  const toggleTheme = (mode: 'light' | 'dark' | 'system') => {
    if (mode === 'light') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
      setIsSystemTheme(false)
    } else if (mode === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
      setIsSystemTheme(false)
    } else if (mode === 'system') {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDarkMode)
      if (prefersDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.removeItem('theme') // Remove custom theme setting
      setIsSystemTheme(true)
    }
  }

  return (
    <div>
      <button
        onClick={() => toggleTheme('light')}
        className={`p-2 rounded-full ${
          !isSystemTheme && !isDarkMode
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white'
        } transition`}
      >
        🌞 Light Mode
      </button>
      <button
        onClick={() => toggleTheme('dark')}
        className={`p-2 rounded-full ${
          !isSystemTheme && isDarkMode
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white'
        } transition`}
      >
        🌙 Dark Mode
      </button>
      <button
        onClick={() => toggleTheme('system')}
        className={`p-2 rounded-full ${
          isSystemTheme
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white'
        } transition`}
      >
        🖥️ System Default
      </button>
    </div>
  )
}

export default ThemeToggle
