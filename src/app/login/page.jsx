"use client"
import React from 'react'
import style from "./login.module.css"
import { signIn, useSession } from 'next-auth/react'

const Login = () => {
  const { data,status } = useSession();
console.log(data, status)
  
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.socialButton}  onClick={(e) => {
          e.preventDefault()
          signIn('google')
        }}> 
          Sign in with Google
        </div>
        <div className={style.socialButton}>
          Sign in with Github
        </div>
        <div className={style.socialButton}>
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
