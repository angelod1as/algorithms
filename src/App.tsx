import { useState } from 'react'
import Algorithms from './components/Algorithms'

function App() {
  const [view, setView] = useState<'' | 'algo' | 'form'>('')

  const rendered = () => {
    if (view === 'algo') {
      return <Algorithms />
    }
    if (view === 'form') {
      return <div>Form</div>
    }
    return <div />
  }

  return (
    <div>
      <button onClick={() => setView('algo')}>See algorithms</button>
      <button onClick={() => setView('form')}>See form</button>

      <div>{rendered()}</div>
    </div>
  )
}

export default App
