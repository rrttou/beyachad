import { useState } from 'react'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'

export default function App(){
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')))

  if(!user){
    return <Login onLogin={(u)=>{localStorage.setItem('user',JSON.stringify(u));setUser(u)}}/>
  }

  return <Home user={user} setUser={setUser}/>
}
