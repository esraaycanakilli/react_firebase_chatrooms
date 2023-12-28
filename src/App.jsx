

import { useEffect, useState } from 'react'
import AuthPage from './firebase/pages/AuthPage'
import { auth } from './firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import Chat from './firebase/pages/Chat'

function App() {
  const [isAuth,SetIsAuth]=useState()
  const [room,setRoom]=useState(null)

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        SetIsAuth(true)
      }else{
        SetIsAuth(false)
      }
    })
    },[])
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    setRoom(e.target[0].value)
  }

    if(isAuth===false){
      return (
  
        <div className='container'>
        <AuthPage/>
        </div>
      )
    }
  
        return (
  
          <div className='container'>
          {room ? ( 
          <Chat  room={room} setRoom={setRoom}/>
          ):(
            <form  onSubmit={handleSubmit} className='room-page'>
            <h1>Chat Odası</h1>
            <p>Hangi Odaya Gireceksiniz</p>
            <input required placeholder='örn:haftasonu' type='text' />
            <button className='submit'> Odaya Gir</button>
            <button className='button'>Çıkış Yap</button>
          </form>
          )}
          </div>
        )

  }

export default App
