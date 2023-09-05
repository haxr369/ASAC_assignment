import React from 'react'

interface a {
  text: string
}

export function ABC(props: a) {
  console.log('abc 리랜더')
  return (
    <div>
      sfjdslfj
      <div>dsfsdd</div>
      <p>{props.text}</p>
    </div>
  )
}
export const ABCMemo = React.memo(ABC)
