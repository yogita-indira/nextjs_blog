"use client"
import React, { Children } from 'react'
import { SessionProvider } from 'next-auth/react'
const AuthProviders = () => {
  return (
    <div>
      <SessionProvider>{Children}</SessionProvider>
    </div>
  )
}

export default AuthProviders
