import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from './Components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [headerName] = useState('Header')
  return (
    <>
      <div>
        {headerName}
      </div>
    </>
  )
}

export default App
