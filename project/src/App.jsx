import { useState } from 'react'
import Display from './Display'

import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Display/>
    </>
  )
}

export default App
