import { nanoid } from 'nanoid'
import { useCallback, useState } from 'react'
import printMe from './functions/printMe'
import toRoman from './functions/toRoman'
import toWord from './functions/toWord'
import { Wrapper, Section, Result, Buttons } from './style'

export default function Algorithms() {
  const [numberToRoman, setNumberToRoman] = useState<number>(0)
  const [numberToWord, setNumberToWord] = useState<number>(0)
  const [print, setPrint] = useState<string[]>([])

  const handleToRoman = useCallback(e => {
    setNumberToRoman(e.target.value)
  }, [])

  const handleToWord = useCallback(e => {
    setNumberToWord(e.target.value)
  }, [])

  const handlePrint = useCallback(strings => {
    console.log(strings)
    setPrint(strings)
  }, [])

  return (
    <Wrapper>
      <div>
        <h1>Algorithms</h1>

        <Section>
          <label htmlFor="roman">Natural to Roman numbers:</label>
          <input
            type="number"
            name="roman"
            id="roman"
            onChange={handleToRoman}
            value={numberToRoman !== 0 ? numberToRoman : ''}
          />
          <Result>
            {numberToRoman !== 0 && <p>{toRoman(+numberToRoman)}</p>}
          </Result>
        </Section>
        <Section>
          <label htmlFor="word">Number to word</label>
          <input
            type="number"
            name="word"
            id="word"
            onChange={handleToWord}
            value={numberToWord !== 0 ? numberToWord : ''}
          />
          <Result>
            {numberToWord !== 0 && <p>{toWord(+numberToWord)}</p>}
          </Result>
        </Section>
        <Section>
          <p>
            Click below to see <code>printMe</code> in action
          </p>
          <Buttons>
            <button onClick={() => handlePrint(printMe('foo'))}>
              printMe('foo')
            </button>
            <button onClick={() => handlePrint(printMe('foo', 'bar'))}>
              printMe('foo', 'bar')
            </button>
            <button onClick={() => handlePrint(printMe('foo', ['bar', 'baz']))}>
              printMe('foo', ['bar', 'baz'])
            </button>
            <button
              onClick={() =>
                handlePrint(printMe('foo', ['bar', ['baz', 'bam']]))
              }
            >
              printMe('foo', ['bar', ['baz', 'bam']])
            </button>
          </Buttons>
          <Result>
            {print.map((each, i) => (
              <span key={nanoid()}>
                {each}
                {i + 1 < print.length && ' | '}
              </span>
            ))}
          </Result>
        </Section>
      </div>
    </Wrapper>
  )
}
