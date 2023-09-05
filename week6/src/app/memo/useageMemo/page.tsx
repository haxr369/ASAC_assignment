'use client'
import { useMemo, useState } from 'react'
import SortedWords from './sortedWords'

function MyMemo() {
  const [words, setWords] = useState<string[]>([])
  const [word, setWord] = useState('')

  const handleClick = () => {
    setWords([...words, word])
    setWord('')
  }
  /**
   * Input 값에 변화가 있을 때마다 word state값이 계속 바뀐다.
   * 이는 MyMemo 컴포넌트를 계속 리랜더링하게 되고
   * SortedWords 또한 words를 props로 가져가기 때문에 비효율적으로 계속 리랜더링된다.
   *
   *
   */
  return (
    <>
      <h1>React Hooks: useMemo</h1>
      <div>
        <SortedWords words={words} />
      </div>
      <input
        value={word}
        onChange={({ target: { value } }) => setWord(value)}
        placeholder="word"
      />
      <button onClick={handleClick}>+</button>
    </>
  )
}

export default MyMemo
