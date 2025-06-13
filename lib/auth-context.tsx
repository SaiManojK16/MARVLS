"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { authAPI } from './api'

type User = {
  _id: string
  name: string
  email: string
  userType: string
  role: string
}

type AuthContextType = {
  user: User | null
  loading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (userData: { name: string; email: string; password: string; userType: string }) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        setUser(null)
        setLoading(false)
        return
      }

      const userData = await authAPI.getMe()
      setUser(userData)
    } catch (error) {
      console.error('Auth check error:', error)
      setUser(null)
      localStorage.removeItem('token')
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const response = await authAPI.login({ email, password })
      if (response.token) {
        localStorage.setItem('token', response.token)
      }
      setUser(response)
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await authAPI.logout()
      setUser(null)
      localStorage.removeItem('token')
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }

  const register = async (userData: { name: string; email: string; password: string; userType: string }) => {
    try {
      const response = await authAPI.register(userData)
      if (response.token) {
        localStorage.setItem('token', response.token)
      }
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 