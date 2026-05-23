import { useState } from 'react'
import { db } from '../firebase.js'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function Report({ user }) {
  const [text, setText] = useState('')
  const [mode, setMode] = useState('anon')
  const [sending, setSending] = useState(false)

  async function send() {
    if (!text.trim()) return
    setSending(true)
    try {
      await addDoc(collection(db, 'reports'), {
        text: text.trim(),
        mode,
        classCode: user?.code || '',
        uid: user?.uid || '',
        senderName: mode === 'named' ? (user?.name || '') : '',
        time: serverTimestamp()
      })
      alert('נשלח')
      setText('')
    } catch {
      alert('שגיאה בשליחה, נסה שוב')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className='card'>
      <textarea value={text} onChange={e => setText(e.target.value)} />
      <label><input type='radio' checked={mode === 'anon'} onChange={() => setMode('anon')} /> אנונימי</label>
      <label><input type='radio' checked={mode === 'named'} onChange={() => setMode('named')} /> עם שם</label>
      <label><input type='radio' checked={mode === 'teacher'} onChange={() => setMode('teacher')} /> למורה</label>
      <button onClick={send} disabled={sending}>{sending ? 'שולח...' : 'שליחה'}</button>
    </div>
  )
}
