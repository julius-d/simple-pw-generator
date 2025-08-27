import { useState, useEffect } from 'react'
import './App.css'
import { generatePassword } from './passwordGenerator'

function App() {
  const [password, setPassword] = useState('')

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
