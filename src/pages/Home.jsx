import {useState} from 'react'
import Report from './Report.jsx'
import Tasks from './Tasks.jsx'
import Ambassadors from './Ambassadors.jsx'

export default function Home({user,setUser}){
  const [tab,setTab]=useState('home')

  return <div className='container'>
    <h3>שלום {user.name}</h3>
    <p>כיתה {user.code}</p>

    <div className='card'>
      <button onClick={()=>setTab('home')}>בית</button>
      <button onClick={()=>setTab('report')}>דיווח</button>
      <button onClick={()=>setTab('tasks')}>משימות</button>
      <button onClick={()=>setTab('amb')}>שגרירים</button>
      <button onClick={()=>{localStorage.clear();setUser(null)}}>יציאה</button>
    </div>

    {tab==='home' && <div className='card'>ביחד - אף אחד לא לבד</div>}
    {tab==='report' && <Report/>}
    {tab==='tasks' && <Tasks/>}
    {tab==='amb' && <Ambassadors/>}
  </div>
}
