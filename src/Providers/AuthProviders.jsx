"use client"
import React from 'react'
import { SessionProvider } from 'next-auth/react'
const AuthProviders = ({children}) => {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  )
}

export default AuthProviders
