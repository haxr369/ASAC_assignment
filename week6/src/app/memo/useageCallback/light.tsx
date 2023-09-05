import React from 'react'

interface LightProps {
  room: string
  on: boolean
  toggle: () => void
}

export function Light(props: LightProps) {
  const { room, on, toggle } = props
  console.log({ room, on })

  return (
    <button onClick={toggle}>
      {room} {on ? '💡' : '⬛'}
    </button>
  )
}

export const LightMemo = React.memo(Light)
