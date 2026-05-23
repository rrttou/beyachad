import {useState} from 'react'
export default function Report(){
  const [text,setText]=useState('')
  const [mode,setMode]=useState('anon')

  function send(){
    const r=JSON.parse(localStorage.getItem('r')||'[]')
    r.push({text,mode,time:Date.now()})
    localStorage.setItem('r',JSON.stringify(r))
    alert('נשלח')
  }

  return <div className='card'>
    <textarea onChange={e=>setText(e.target.value)}/>
    <label><input type='radio' checked={mode==='anon'} onChange={()=>setMode('anon')}/>אנונימי</label>
    <label><input type='radio' checked={mode==='named'} onChange={()=>setMode('named')}/>עם שם</label>
    <label><input type='radio' checked={mode==='teacher'} onChange={()=>setMode('teacher')}/>למורה</label>
    <button onClick={send}>שליחה</button>
  </div>
}
