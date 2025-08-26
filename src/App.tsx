import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    let result = ''
    for (let i = 0; i < 12; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  useEffect(() => {
    setPassword(generatePassword())
  }, [])

  return (
    <div>
      <p style={{ fontSize: '24px', fontFamily: 'monospace', padding: '20px', backgroundColor: '#f5f5f5', border: '1px solid #ccc', borderRadius: '4px' }}>
        {password}
      </p>
    </div>
  )
}

export default App
