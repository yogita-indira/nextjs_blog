import React from 'react'
import style from "./login.module.css"
const login = () => {
  return (
    <div className={style.container}>
        <div className={style.wrapper}>


            <div className={style.socialButton}> Sign in with Google</div>
            <div className={style.socialButton}> Sign in with Github</div>
            <div className={style.socialButton}> Sign in with Facebook</div>       
        </div>
      
    </div>
  )
}

export default login
