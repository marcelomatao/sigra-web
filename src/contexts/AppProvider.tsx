import { ReactNode } from 'react'
import { ThemeProvider } from './ThemeContext'
import { ToastProvider } from '../components/ToastProvider'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </ThemeProvider>
  )
}
