import React, { useMemo } from 'react'

interface WordsProps {
  words: string[]
}

function SortedWords(props: WordsProps) {
  const { words } = props
  const sortWords = () => {
    console.log('sortWords')
    delay(500)
    return words.sort()
  }
  console.log('리랜더!')
  //const sortedWords = sortWords() // SLOW
  const sortedWords = useMemo(sortWords, [words]) // FAST 함수와 의존성 배열을 추가해줌
  /**
   * 단어를 입력할 때 지연이 발생하지 않는 이유
   * useMemo는 의존성 배열의 변화가 있을 때 함수를 실행시킨다.
   * + 버튼을 누르지 않는한 words state는 변하지 않는다.
   * props로 전달된 words는 입력하는 동안에는 변하지 않기 때문에
   * setWords 함수는 sortedWords 컴포넌트가 랜더링되어도 실행되지 않아서 빠른 입력이 가능하다!
   * 다만, + 버튼을 누르면
   */
  return (
    <>
      <h2>Sorted Words</h2>
      <ul>
        {sortedWords.map((word, idx) => (
          <li key={idx}>{word}</li>
        ))}
      </ul>
    </>
  )
}

function delay(ms: number) {
  // 딜레이가 발생하는 정렬
  const now = new Date().getTime()
  while (new Date().getTime() < now + ms) {}
}

export default SortedWords
