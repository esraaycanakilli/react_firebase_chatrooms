import React, { useEffect, useState } from 'react'
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import Message from '../../components/Message';

const Chat = ({room,setRoom}) => {

const[messages,setMessages]=useState([])
  const messagesCol=collection(db,'messages')
  const handleSubmit=async (e)=>{
    e.preventDefault()
    const text=(e.target[0].value)
    await addDoc(messagesCol,{
      text,
      room,
      user:{
        name:auth.currentUser.displayName,
        photo:auth.currentUser.photoURL,
        uid:auth.currentUser.uid,
      },
      createdAt:serverTimestamp(),
    })
  
  
  }


  useEffect(()=>{
    const queryOptions=query(messagesCol,
      where("room","==",room),
      orderBy("createdAt","asc")
      )
     
      

      const unsubscribe=onSnapshot(queryOptions,(snapshot)=>{
      const comingMessages=[]
      snapshot.docs.forEach((doc)=>comingMessages.push({...doc.data(),id:doc.id}))
      setMessages(comingMessages)
        })
        return ()=>{
          unsubscribe()
        }
  },[])

  console.log(messages)
  return (
    <div className='chat'>
      <header>
        <p className='user'>Kullanıcı Adı</p>
        <p>{room}</p>
        <a onClick={()=>setRoom(null)}>Farklı Oda</a>
      </header>
      <main>
        {messages.map((msg) => (
          <Message key={msg.id} msg={msg} />
        ))}
      </main>
      <form onSubmit={handleSubmit}>
        <input required placeholder='mesajınızı yazınız...' type='text' />
        <button>Gönder</button>
      </form>
    </div>
  )
}

export default Chat