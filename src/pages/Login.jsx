import { useState } from 'react'
import { loginAnon } from '../firebase.js'

export default function Login({ onLogin }) {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    if (!name.trim() || !code.trim()) return
    setLoading(true)
    try {
      const firebaseUser = await loginAnon()
      onLogin({ name: name.trim(), code: code.trim(), uid: firebaseUser.uid })
    } catch {
      alert('שגיאת התחברות, נסה שוב')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='container'>
      <h2>ביחד</h2>
      <div className='card'>
        <input placeholder='שם' value={name} onChange={e => setName(e.target.value)} />
        <input placeholder='קוד כיתה' value={code} onChange={e => setCode(e.target.value)} />
        <button onClick={handleLogin} disabled={loading}>
          {loading ? 'מתחבר...' : 'כניסה'}
        </button>
      </div>
    </div>
  )
}
