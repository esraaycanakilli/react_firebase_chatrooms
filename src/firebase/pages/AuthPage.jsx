import { signInWithPopup, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebaseConfig'


const AuthPage = () => {
    const handleClick=()=>{
signInWithRedirect(auth,provider)


    }
  return (
    <div className='auth'>
        <h1>Chat Odası</h1>
        <p>Devam Etmek İçin Giriş Yapın</p>
        <button onClick={handleClick}>
            <img src="/google-l.png" />
            <span>Google İle Gir</span>
        </button>
    </div>
  )
}

export default AuthPage