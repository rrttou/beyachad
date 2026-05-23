import {useState} from 'react'
export default function Login({onLogin}){
  const [name,setName]=useState('')
  const [code,setCode]=useState('')
  return <div className='container'>
    <h2>ביחד</h2>
    <div className='card'>
      <input placeholder='שם' onChange={e=>setName(e.target.value)}/>
      <input placeholder='קוד כיתה' onChange={e=>setCode(e.target.value)}/>
      <button onClick={()=>onLogin({name,code})}>כניסה</button>
    </div>
  </div>
}
