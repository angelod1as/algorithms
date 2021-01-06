import { useCallback, useState } from 'react'
import toRoman from './functions/toRoman'
import toWord from './functions/toWord'

export default function Algorithms() {
  const [numberToRoman, setNumberToRoman] = useState<number>()
  const [numberToWord, setNumberToWord] = useState<number>()

  const handleToRoman = useCallback(e => {
    setNumberToRoman(e.target.value)
  }, [])

  const handleToWord = useCallback(e => {
    setNumberToWord(e.target.value)
  }, [])

  return (
    <div>
      <h1>Algorithms</h1>

      <div>
        <label htmlFor="roman">Natural to Roman numbers:</label>
        <input
          type="number"
          name="roman"
          id="roman"
          onChange={handleToRoman}
          value={numberToRoman}
        />
        {numberToRoman && <p>{toRoman(+numberToRoman)}</p>}
      </div>
      <div>
        <label htmlFor="word">Number to word</label>
        <input
          type="number"
          name="word"
          id="word"
          onChange={handleToWord}
          value={numberToWord}
        />
        {numberToWord && <p>{toWord(+numberToWord)}</p>}
      </div>
    </div>
  )
}
